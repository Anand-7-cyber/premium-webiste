'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const { user, isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const isClerkPremium = user?.publicMetadata?.premium === true
      const isLocalPremium = localStorage.getItem('isPremiumUser') === 'true'

      // ✅ Prevent redirect loop for premium users
      if ((isClerkPremium || isLocalPremium) && window.location.pathname !== '/premium') {
        router.replace('/premium')
        return
      }

      setIsChecking(false)
    }
  }, [isLoaded, isSignedIn, user, router])

  // ✅ ESLint-safe loading & auth checks
  if (!isLoaded || !isSignedIn) {
    return <div className="text-center text-gray-500 mt-10">Checking authentication...</div>
  }

  if (isChecking) {
    return <p className="text-center mt-10 text-gray-500">Loading dashboard...</p>
  }

  const name = user.fullName || 'Student'
  const email = user?.emailAddresses?.[0]?.emailAddress || 'Not available'

  return (
    <div className="min-h-[1000px] bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 p-6 text-center flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-900 mt-10">
        Welcome <span className="text-pink-600">{name}</span> 🌟
      </h1>
      <p className="text-gray-700 mt-2 text-lg">
        Email: <span className="font-medium">{email}</span>
      </p>

      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-10 mt-10 text-left space-y-8">
        {/* Admin Info */}
        <section className="bg-purple-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">💁‍♂️ Meet the Admin: Anand Kumar Rai</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            Anand Kumar Rai is the visionary creator behind StudyElite — a dedicated learner, future engineer, and tech-savvy mentor. Currently in his final year of
            <strong className="text-purple-800"> Diploma in Electronics Engineering</strong>, Anand is also targeting top ranks in <strong>Class 12 PCM</strong> and <strong>IIT-JEE 2026</strong>.
            With expert knowledge in <em>HTML, CSS, JS, Node.js</em> and a hunger to grow, he's on a mission to empower students across India 🚀💡
          </p>
        </section>

        {/* Courses Section */}
        <section className="bg-indigo-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">📚 Your Courses & Skills</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
            <li>🎓 Final Year Diploma in Electronics Engineering</li>
            <li>📘 Preparing for Class 12 Boards (PCM)</li>
            <li>💻 IIT-JEE 2026 Full Focus</li>
            <li>🌐 Learning Full Stack Web Dev (Node.js, Express, MongoDB)</li>
            <li>🎨 Tailwind CSS | Responsive Design</li>
            <li>🧑‍💻 Mastering Python & C</li>
            <li>🎮 Free Fire Gamer (Sharp Mind)</li>
            <li>🏋️ Fitness & Self-Discipline</li>
            <li>🏡 Household Management Expert</li>
          </ul>
        </section>

        {/* Premium Benefits */}
        <section className="bg-yellow-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">🌟 Premium Features Just for You</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
            <li>📚 HD Quality Study Notes (PDF + handwritten)</li>
            <li>📝 Weekly Mock Tests with Instant Feedback</li>
            <li>🎥 Exclusive Mentor Video Lectures</li>
            <li>🤝 One-on-One Doubt Sessions</li>
            <li>📊 Daily Goal Tracking System</li>
            <li>🔁 Smart Revision & Time Table Generator</li>
            <li>💬 Live Telegram/Chat Doubt Support</li>
            <li>🎁 Bonus: Project Ideas, Roadmaps, Career Mentorship</li>
          </ul>
        </section>

        <div className="text-center mt-10">
          <button
            onClick={() => router.push('/subscribe-only')}
            className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition"
          >
            🔓 Unlock Premium & Supercharge Your Study Journey
          </button>
        </div>
      </div>

      <footer className="mt-10 text-sm text-gray-600">
        Made with ❤️ by Anand Kumar Rai (Admin & Developer)
      </footer>
    </div>
  )
}
