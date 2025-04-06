"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">💎 Get Premium Access for just ₹9</h1>

      {submitted ? (
        <p className="text-green-600 text-xl text-center">
          🎉 Form submitted! We'll verify and grant access soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Your Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">WhatsApp Number</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border rounded-md"
              placeholder="9876543210"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Payment Screenshot</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition"
          >
            Submit & Request Access
          </button>
        </form>
      )}

      <div className="mt-10 text-center">
        <h2 className="text-lg font-medium text-gray-700 mb-1">Pay ₹9 to this UPI ID:</h2>
        <p className="text-xl font-semibold text-blue-600">anandkrnkp06@okaxis</p>
        <img
          src="https://i.postimg.cc/1500XzGH/Screenshot-2025-04-06-084253.png"
          alt="Scan QR to Pay"
          className="w-56 mt-4 rounded-lg border p-2"
        />
      </div>
    </div>
  );
}
