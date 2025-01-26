import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Tervetuloa, {session.user?.name || 'käyttäjä'}!</h1>
      <form action={async () => {
        'use server'
        await signOut({ redirect: false })
      }}>
        <Button type="submit">Kirjaudu ulos</Button>
      </form>
    </main>
  )
}