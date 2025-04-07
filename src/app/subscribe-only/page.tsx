'use client';

import { SignIn, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn && user?.publicMetadata?.premium === true) {
      router.replace('/premium');
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
          appearance={{
            elements: {
              formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
              card: 'shadow-xl rounded-2xl',
            },
          }}
        />
      </div>
    </div>
  );
}
