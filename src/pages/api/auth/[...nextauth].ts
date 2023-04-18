import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                const { phoneNumber, code } = credentials as { phoneNumber: string, code: string };

                console.log('opa, bão?', credentials)

                if (phoneNumber !== '34996307984' || code !== '1234') {
                    throw new Error('Invalid phone number or code');
                }

                return { id: 1, name: 'Nícolas', email: 'nicolas@gmail.com' }
            },
        }),
    ],
}

export default NextAuth(authOptions)