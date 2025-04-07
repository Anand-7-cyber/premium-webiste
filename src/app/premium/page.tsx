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
        router.replace('/'); // Not signed in, redirect
        return;
      }

      const email = user?.emailAddresses?.[0]?.emailAddress || '';
      const isPremiumUser = email.includes('premium') || localStorage.getItem('isPremiumUser') === 'true';

      if (!isPremiumUser) {
        router.replace('/'); // Not premium, redirect
      } else {
        setIsPremium(true); // Premium user, allow access
      }
    }
  }, [isLoaded, isSignedIn, user, router]);

  if (!isLoaded || !isSignedIn || !isPremium) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white flex items-center justify-center p-6">
      <div className="bg-white text-black p-10 rounded-3xl shadow-2xl max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-purple-700">🌟 Premium Access Granted</h1>
        <p className="text-lg">Welcome, {user.firstName}! You now have full access to our premium features.</p>

        <div className="mt-6 text-left bg-purple-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-purple-800 mb-2">Your Premium Benefits:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>🚀 Unlimited Access to Exclusive Features</li>
            <li>🎁 Priority Updates and Early Access</li>
            <li>📞 24/7 Premium Support</li>
          </ul>
        </div>

        <button
          className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg transition"
          onClick={() => alert('Stay tuned for more premium content!')}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}
