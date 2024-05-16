import type { NextAuthConfig } from "next-auth"
import "next-auth/jwt"
import Passkey from "next-auth/providers/passkey"
import Credentials from "next-auth/providers/credentials"
import NextAuth from "next-auth"
const user = { id: "1", name: "John Doe", email: "testi@example.com" }

const config = {
  providers: [
    Credentials({
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
  debug: process.env.NODE_ENV !== "production" ? true : false,
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)

declare module "next-auth" {
  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}