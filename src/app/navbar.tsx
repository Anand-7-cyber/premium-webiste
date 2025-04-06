'use client'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-white shadow">
      <Link href="/" className="text-2xl font-bold text-purple-700">
      StudyElite 🚀
      </Link>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  )
}
