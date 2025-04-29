'use client'

import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';
import { DefaultSession } from "next-auth";

interface Session extends DefaultSession {
    user: {
        email: string;
        image: string;
        name: string;
        admin: boolean;
        verified: boolean;
    }
}

interface ProviderProps {
    children: React.ReactNode;
    session: Session | null;
}

export const Provider: FC<ProviderProps> = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}
