import User from "@/models/user";
import { connectToDB } from "./connectToDB";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import {
  DefaultSession,
  getServerSession,
  NextAuthOptions,
  Session,
} from "next-auth";
import { Account, Profile, User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      email: string;
      image: string;
      name: string;
      admin: boolean;
      verified: boolean;
      siret?: string;
      companyName?: string;
      phone?: string;
      address?: string;
      website?: string;
      userType?: string;
    };
  }
}

const useSecureCookies = (
  process.env.NEXTAUTH_URL || "http://localhost"
).startsWith("https://");
const cookiesPrefix = useSecureCookies ? "__Secure-" : "";

export const authOptions: NextAuthOptions = {
  pages: {
    error: "/sign-in",
    signIn: "/sign-in",
    signOut: "/sign-in",
    newUser: "/sign-up/config-type",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your-email@example.com",
        },
        mdp: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials, req) {
        try {
          await connectToDB();
          const userExisting = await User.findOne({
            email: credentials?.email,
          }).exec();

          if (
            userExisting &&
            (await bcrypt.compare(
              credentials?.mdp as string,
              userExisting?.mdp as string
            ))
          ) {
            return {
              id: userExisting?._id.toString(),
              email: userExisting.email,
              admin: userExisting.admin,
              verified: userExisting.verified,
              name: userExisting.name,
              image: userExisting.image,
            };
          }
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({
      user,
      account,
      profile,
      email,
      credentials,
    }: {
      user: NextAuthUser | AdapterUser;
      account: Account | null;
      profile?: Profile;
      email?: { verificationRequest?: boolean };
      credentials?: Record<string, unknown>;
    }): Promise<boolean> {

      if (account?.provider == "google") {
        try {
          await connectToDB();
          const userExists = await User.findOne({
            email: user?.email,
          }).exec();
          if (!userExists) {
            const newUser = new User({
              email: user?.email,
              name: user?.name,
              image: user?.image,
              admin: user?.email === process.env.MAIL_ADMIN,
              verified: true,
            });

            await newUser.save();
            return true;
          }
          return userExists !== null;
        } catch (error) {
          return false;
        }
      }
      if (account?.provider == "credentials") {
        try {
          await connectToDB();
          const userExists = await User.findOne({ email: credentials?.email });
          if (!userExists) return false;

          if (
            typeof userExists.mdp != "undefined" &&
            bcrypt.compareSync(credentials?.mdp as string, userExists.mdp)
          ) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          return false;
        }
      }
      return false;
    },

    async jwt({
      token,
      user,
      trigger,
      session,
    }: {
      token: JWT;
      user?: NextAuthUser | AdapterUser;
      trigger?: "signIn" | "update" | "signUp";
      session?: Session;
    }): Promise<JWT> {
      await connectToDB();

      if (user) {
        const userReturn = await User.findOne({ email: user.email }).exec();
        if (userReturn) {
          token.user = userReturn;
        }
      }

      if (trigger === "update") {
        token.user = session?.user;
        return { ...token, ...session?.user };
      }
      return token;
    },

    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      if (token.user) {
        session.user = token.user as {
          email: string;
          image: string;
          name: string;
          admin: boolean;
          verified: boolean;
          siret?: string;
          companyName?: string;
          phone?: string;
          address?: string;
          website?: string;
          userType?: string;
        };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  cookies: {
    sessionToken: {
      name: `${cookiesPrefix}auth.session-token`,
      options: {
        httpOnly: useSecureCookies,
        path: "/",
        sameSite: "lax",
        secure: useSecureCookies,
      },
    },
  },
};

export const getAuthServerSession = () => getServerSession(authOptions);
