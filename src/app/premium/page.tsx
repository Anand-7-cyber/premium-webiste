'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PremiumPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.replace('/');
        return;
      }

      const email = user?.emailAddresses?.[0]?.emailAddress || '';
      const isPremiumUser = email.includes('premium') || localStorage.getItem('isPremiumUser') === 'true';

      if (!isPremiumUser) {
        router.replace('/');
      } else {
        setIsPremium(true);
      }
    }
  }, [isLoaded, isSignedIn, user, router]);

  if (!isLoaded || !isSignedIn || !isPremium) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold text-gray-700">
        Loading premium experience...
      </div>
    );
  }

  const name = user.fullName || 'Student';
  const email = user?.emailAddresses?.[0]?.emailAddress || 'Not available';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4 text-yellow-400">🌟 Premium Dashboard</h1>
      <p className="text-xl text-center text-purple-100 mb-2">Hello, <span className="font-bold text-white">{name}</span> 👋</p>
      <p className="text-md text-purple-200">Email: {email}</p>

      <div className="bg-white text-black mt-10 p-8 rounded-3xl shadow-2xl w-full max-w-4xl space-y-6">
        <section className="bg-purple-100 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-purple-800 mb-2">🔥 Welcome to Premium</h2>
          <p className="text-gray-800 leading-relaxed text-lg">
            You now have access to all premium benefits offered by <strong>StudyElite</strong>. Unlock your true academic potential with exclusive features tailored just for you!
          </p>
        </section>

        <section className="bg-indigo-100 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-2">🚀 Premium Benefits Unlocked</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
            <li>📚 Full Access to HD Notes (PDF + handwritten)</li>
            <li>🧠 Weekly Mock Tests + Instant Evaluation</li>
            <li>🎥 Premium Mentor Lectures</li>
            <li>💬 One-on-One Doubt Sessions</li>
            <li>📅 Daily Study Planner + Goal Tracker</li>
            <li>🧭 Time Table Generator & Smart Revision</li>
            <li>🎯 Live Chat + Telegram Support</li>
            <li>🎁 Bonus: Career Mentorship, Project Ideas</li>
          </ul>
        </section>

        <div className="text-center">
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg"
            onClick={() => alert('More premium content coming soon!')}
          >
            ✨ Explore More Premium Features
          </button>
        </div>
      </div>

      <footer className="mt-10 text-sm text-purple-200">
        Premium access provided by <strong>Anand Kumar Rai</strong> 💻✨
      </footer>
    </div>
  );
}
