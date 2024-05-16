import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const user = { id: "1", name: "John Doe", email: "testi@example.com" }
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "auto",
 
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_APP_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_APP_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jdoe" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
        const pw = process.env.BASIC_AUTH_PASSWORD;
        if (pw && credentials?.password === pw) {
          return user
        }
        return null
      }

    })
  ],
};