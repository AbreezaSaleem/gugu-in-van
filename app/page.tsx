"use client";

import { useEffect, useState } from "react";
import "./storybook.css";

export default function Home() {
  const targetDate = new Date("2026-06-29T00:00:00");

  const getTimeRemaining = () => {
    const diff = targetDate.getTime() - Date.now();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="countdown-page">
      <div className="decor decor-left">⌁</div>
      <div className="decor decor-right">✤</div>

      <section className="content">
        <h1 className="arched-title">
          Countdown to<br />Our Special Day!
        </h1>

        <div className="timer">
          {[
            ["days", "DAYS"],
            ["hours", "HRS"],
            ["minutes", "MIN"],
            ["seconds", "SEC"],
          ].map(([key, label], index) => (
            <div className="timer-group" key={key}>
              <div className="time-unit">
                <span>{String(timeLeft[key as keyof typeof timeLeft]).padStart(2, "0")}</span>
                <small>{label}</small>
              </div>
              {index < 3 && <div className="separator">:</div>}
            </div>
          ))}
        </div>

        <h2>Our Fun Plans Together</h2>

        <h3 className="sub-title">What we have planned so far</h3>

        <ul className="plans">
          <li>Walk to Burnaby Mountain Park 🏔️</li>
          <li>Hotpot night 🍲</li>
          <li>Movies after babies sleep 🎬</li>
          <li >Go to the mall 🛍️</li>
          <li >Pizza + burgers night 🍕🍔 </li>
          <li >Watch babies play 🧸</li>
        </ul>
      </section>

      <img src="/picnic.png" alt="" className="corner-img corner-left" />
      <img src="/teddy.png" alt="" className="corner-img corner-right" />
    </main>
  );
}
