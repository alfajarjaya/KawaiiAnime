import NextAuth from "next-auth";
import githubAuth from 'next-auth/providers/github';
import Google from "next-auth/providers/google";
import Facebook from 'next-auth/providers/facebook';

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // Google({
        //     clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET
        // }),
        // Facebook({
        //     clientId: process.env.FACEBOOK_OAUTH_CLIENT_ID,
        //     clientSecret: process.env.FACEBOOK_OAUTH_CLIENT_SECRET
        // })
        // Email({
        //     server: {
        //         host: process.env.EMAIL_SERVER_HOST,
        //         port: process.env.EMAIL_SERVER_PORT,
        //         auth: {
        //             user: process.env.EMAIL_SERVER_USER,
        //             pass: process.env.EMAIL_SERVER_PASSWORD
        //         }
        //     },
        //     from: process.env.EMAIL_FROM
        // })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }