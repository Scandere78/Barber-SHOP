import { Document, Schema, model, models, Model } from "mongoose";
import bcrypt from 'bcryptjs';

export interface UserProps extends Document {
  _id: Schema.Types.ObjectId;
  email: string;
  name?: string;
  image?: string;
  admin: boolean;
  mdp?: string;
  userType?: "client" | "agence";
  siret?: string;
  address?: string;
  phone?: string;
  website?: string;
  companyName?: string;
  verified: boolean;
  pendingEmail?: string;
}

if (models.User) {
  delete models.User;
}

const UserSchema = new Schema<UserProps>(
  {
    email: {
      type: String,
      required: [true, "Email obligatoire !"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    mdp: {
      type: String,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    userType: {
      type: String,
      enum: ["client", "agence"],
    },
    siret: {
      type: String,
    },
    companyName: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
    pendingEmail: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("mdp") || !this.mdp) return next();
  const hash = await bcrypt.hash(this.mdp, 10);
  this.mdp = hash;
  next();
});

const User: Model<UserProps> =
  models.User || model<UserProps>("User", UserSchema, "users");

export default User;
