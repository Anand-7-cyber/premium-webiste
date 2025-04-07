'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Image from 'next/image';

export default function SubscriberForm() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const premium = localStorage.getItem('isPremiumUser');
    if (premium === 'true') {
      router.replace('/premium');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validTransactionPattern = /^CICAg.{9}$/;

    if (!validTransactionPattern.test(transactionId.trim())) {
      setError('❌ Invalid Google Transaction ID. Please check and try again.');
      return;
    }

    try {
      await addDoc(collection(db, 'subscribers'), {
        username,
        phone,
        transactionId,
        createdAt: new Date(),
      });

      localStorage.setItem('isPremiumUser', 'true');
      router.push('/premium-home');
    } catch {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700">
          Unlock Premium Access
        </h2>

        <p className="text-center text-gray-600 text-sm">
          Pay ₹9 to UPI ID:{" "}
          <span className="font-semibold text-black">anandkrnkp06@okaxis</span> <br />
          Or scan QR below & enter Google Transaction ID
        </p>

        <div className="w-32 mx-auto rounded-lg border p-2 overflow-hidden">
          <Image
            src="https://i.postimg.cc/1500XzGH/Screenshot-2025-04-06-084253.png"
            alt="Scan to Pay"
            width={128}
            height={128}
            className="rounded-lg"
          />
        </div>

        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none text-gray-800 placeholder-gray-600"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none text-gray-800 placeholder-gray-600"
          required
        />

        <input
          type="text"
          placeholder="Google Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none text-gray-800 placeholder-gray-600"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-700 text-white p-3 rounded-lg hover:bg-indigo-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
