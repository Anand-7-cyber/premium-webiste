"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PremiumHome() {
  const router = useRouter();

  // 🔒 Redirect if user is not premium
  useEffect(() => {
    if (typeof window !== "undefined") {
      const premium = localStorage.getItem("isPremiumUser");
      if (premium !== "true") {
        router.replace("/");
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 flex flex-col items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-yellow-700">
          🎉 Welcome to Premium!
        </h1>
        <p className="text-lg text-gray-700">
          You're now a Premium Member! Enjoy your exclusive content here 🏆
        </p>

        <div className="mt-6 bg-yellow-100 border border-yellow-300 p-6 rounded-xl shadow-inner">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Premium Features:</h2>
          <ul className="text-left list-disc list-inside text-gray-700 space-y-1">
            <li>✨ Early access to features</li>
            <li>💎 Exclusive resources</li>
            <li>🚀 Faster support & updates</li>
          </ul>
        </div>

        <button
          onClick={() => alert("More Premium Content Coming Soon!")}
          className="mt-8 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
        >
          Explore More
        </button>
      </div>
    </div>
  );
}
