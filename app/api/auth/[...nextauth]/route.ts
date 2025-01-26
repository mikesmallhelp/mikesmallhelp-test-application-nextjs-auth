import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === 'example@example.com' && credentials?.password === 'password') {
          return { id: "1", name: "Example User", email: "example@example.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }