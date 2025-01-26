import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import LogoutButton from './logout-button'

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome, {session.user?.name || 'käyttäjä'}!</h1>
      <LogoutButton />
    </main>
  )
}