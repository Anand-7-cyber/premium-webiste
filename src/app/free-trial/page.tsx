'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button'; // Agar tu shadcn/ui use kar raha hai toh

export default function FreeTrialPage() {
  const router = useRouter();

  const handleUpgradeClick = () => {
    router.push('/subscribe-only'); // Yeh wo page hai jahan tera premium form hai
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 p-8">
      <h1 className="text-3xl font-extrabold text-purple-800 mb-4">
        Welcome to the Free Trial 🚀
      </h1>
      <p className="text-center text-gray-700 max-w-xl mb-8">
        You're currently using the free version of StudyElite. Unlock the full experience to get handwritten notes, video lectures, mock tests, and more!
      </p>

      <Button
        onClick={handleUpgradeClick}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition duration-300"
      >
        Unlock Premium 🔐
      </Button>
    </div>
  );
}
