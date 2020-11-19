import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import React from "react";

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    //database: process.env.NEXT_PUBLIC_DATABASE_URL,
    session: {
        jwt: true,
    },
    debug: true,
};

const Auth = (req, res) =>
    NextAuth(req, res, options);

export default Auth;