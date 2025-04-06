// app/premium-success/page.tsx
'use client'

export default function PremiumSuccessPage() {
  return (
    <div className="text-center mt-16 p-8 bg-green-50 rounded-xl shadow">
      <h1 className="text-3xl font-bold text-green-700">🎉 Payment Successful!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Thank you for subscribing. You now have full premium access! 💎
      </p>
      <a
        href="/subscribe-only"
        className="mt-6 inline-block bg-purple-700 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-800 transition"
      >
        Go to Premium Content
      </a>
    </div>
  )
}
