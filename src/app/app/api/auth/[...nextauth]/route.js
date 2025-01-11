import NextAuth from "next-auth";
import githubAuth from 'next-auth/providers/github';
import Google from "next-auth/providers/google";

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Google({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            if (url === '/signin') {
                return '/users/dashboard';
            }
            return baseUrl;
        },
    },
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }