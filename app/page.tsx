"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const targetDate = new Date("2026-06-29T00:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-orange-50 to-blue-50 text-gray-700 flex flex-col items-center px-6 py-10">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-2">
        Counting down to our time together 💛
      </h1>

      <p className="text-sm mb-8 text-gray-500">
        29 June – 3 July | Vancouver
      </p>

      {/* Countdown */}
      <div className="grid grid-cols-4 gap-3 text-center mb-10">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="bg-white/70 shadow-md rounded-2xl p-4 min-w-[70px]">
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-xs uppercase tracking-wide">{label}</div>
          </div>
        ))}
      </div>

      {/* Photos */}
      <div className="flex flex-col md:flex-row gap-6 mb-10 w-full max-w-3xl">
        
        <div className="flex-1 bg-white rounded-2xl shadow-md p-4 text-center">
          <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center">
            📷 My two babies photo 1
          </div>
          <p className="mt-2 font-medium">My two babies 💙💛</p>
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-md p-4 text-center">
          <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center">
            📷 My two babies photo 2
          </div>
          <p className="mt-2 font-medium">More memories 💛</p>
        </div>

      </div>

      {/* Activities */}
      <div className="w-full max-w-2xl bg-white/70 rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-center">
          What we’ve planned so far ✨
        </h2>

        <ul className="space-y-2 text-sm">
          <li>✔ Walk to Burnaby Mountain Park</li>
          <li>✔ Hotpot night 🍲</li>
          <li>✔ Movies after babies sleep 🎬</li>
          <li>✔ Go to the mall 🛍️</li>
          <li>✔ Pizza + burgers night 🍕🍔</li>
          <li>✔ Watch babies play 🧸</li>
        </ul>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500">
        Just simple days, good food, and time together ✨
      </p>

    </main>
  );
}
