import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession()
  if (!session) redirect('/auth/login')

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Welcome, {session.user?.name}</h1>
      <p className="text-gray-500 mt-2">You are successfully authenticated.</p>
    </div>
  )
}
