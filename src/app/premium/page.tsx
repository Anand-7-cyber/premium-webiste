'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PremiumPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const email = user?.emailAddresses?.[0]?.emailAddress || ''
      const hasSubscription = email.includes('premium')

      if (!hasSubscription) {
        if (window.location.pathname !== '/') {
          router.replace('/')
          return
        }
      }
    }
  }, [isLoaded, isSignedIn, user, router])

  if (!isLoaded) return <p className="text-center mt-10">Loading...</p>

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-30 backdrop-blur-md">
        <h1 className="text-xl font-bold">🌟 Premium</h1>
        <span className="text-sm">{user?.emailAddresses?.[0]?.emailAddress}</span>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center justify-center mt-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Premium Zone 🚀</h2>
        <p className="text-lg max-w-xl">
          You&apos;ve unlocked premium access! Enjoy all the exclusive features and content curated just for you.
        </p>

        <button
          className="mt-10 px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          onClick={() => router.push('/exclusive-content')}
        >
          Explore Premium Features →
        </button>
      </div>
    </div>
  )
}
