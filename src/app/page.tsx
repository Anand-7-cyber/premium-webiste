'use client';

import { SignIn, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
  
    if (isSignedIn) {
      const isPremium = user?.publicMetadata?.premium === true;
      const targetRoute = isPremium ? '/premium' : '/free-trial';
  
      if (window.location.pathname !== targetRoute) {
        router.replace(targetRoute);
      }
    }
  }, [isLoaded, isSignedIn, user, router]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 px-4 py-12 text-center">
      <h1 className="text-5xl font-extrabold text-purple-800 mb-4">StudyElite 🚀</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        A premium platform created by <span className="text-purple-900 font-semibold">Anand Kumar Rai</span> 🧠 — focused on helping students ace their Boards & Competitive Exams with elite content.
      </p>

      <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md border border-purple-200">
        <SignIn
          afterSignInUrl="/premium"
          routing="hash"
          appearance={{
            elements: {
              formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
              card: 'shadow-xl rounded-2xl',
            },
          }}
        />
      </div>

      <div className="mt-10 text-gray-700 space-y-3 text-base max-w-xl">
        <p className="text-xl font-semibold text-purple-800">🔐 Unlock Your Learning Superpowers</p>
        <p>✅ Get access to handwritten & digital study notes</p>
        <p>📚 Solve weekly mock tests & practice problems</p>
        <p>🎥 Watch exclusive video lectures and doubt-clearing sessions</p>
        <p>📈 Track your progress with personal dashboard tools</p>
        <p>🤝 Join a community of serious learners & toppers</p>
      </div>

      <div className="mt-12 bg-purple-100 px-6 py-4 rounded-xl shadow-md max-w-xl">
        <h2 className="text-purple-800 font-bold text-lg">🧑‍💻 About the Creator</h2>
        <p className="text-gray-800 mt-2 text-sm leading-relaxed">
          <span className="font-semibold text-purple-700">Anand Kumar Rai</span> is a passionate student, developer, and future engineer. He created StudyElite to empower students like you with the right resources, mentorship, and confidence to crack exams like Class 12 PCM Boards and JEE 2026 💪.
        </p>
      </div>

      <footer className="mt-10 text-xs text-gray-500">
        Made with 💖 by Anand Kumar Rai
      </footer>
    </div>
  );
}
