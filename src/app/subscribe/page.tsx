// src/app/subscribe/page.tsx
"use client";

import { useState } from 'react';

export default function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">💎 Get Premium Access for just ₹9</h1>
      {submitted ? (
        <p className="text-green-600 text-xl">🎉 Form submitted! We&#39;ll verify and grant access soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">WhatsApp Number</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="9876543210"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Payment Screenshot</label>
            <input
              type="file"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800"
          >
            Submit & Request Access
          </button>
        </form>
      )}

      <div className="mt-8 text-center">
        <h2 className="text-lg font-medium mb-2 text-gray-700">Pay ₹9 to this UPI ID:</h2>
        <p className="text-xl font-semibold text-blue-600">anandkrnkp06@okaxis</p>
        <img
          src="/your-qr-image-path.jpg"
          alt="Scan QR to Pay"
          className="w-56 mt-4 rounded-lg border"
        />
      </div>
    </div>
  );
}
