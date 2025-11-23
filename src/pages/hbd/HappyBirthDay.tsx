import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HappyBirthDay() {
  // const targetDate = new Date("2025-11-24T00:00:00"); // 24 Nov 2568 BE
  const exampleDate = new Date(); // current date/time for reference

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = exampleDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsFinished(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen py-10 text-center dark:text-white bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-4">
      <h1 className="text-3xl font-extrabold mb-6">
        🎉 Happy Birthday Countdown 🎂
      </h1>
      <p className="text-lg mb-6">
        Countdown to <strong>24 November 2568</strong>
      </p>

      {!isFinished ? (
        <div className="flex gap-4 text-3xl font-semibold">
          <div className="p-4 rounded-xl bg-white shadow-lg">
            {timeLeft.days}
            <span className="block text-sm font-normal">Days</span>
          </div>
          <div className="p-4 rounded-xl bg-white shadow-lg">
            {timeLeft.hours}
            <span className="block text-sm font-normal">Hours</span>
          </div>
          <div className="p-4 rounded-xl bg-white shadow-lg">
            {timeLeft.minutes}
            <span className="block text-sm font-normal">Minutes</span>
          </div>
          <div className="p-4 rounded-xl bg-white shadow-lg">
            {timeLeft.seconds}
            <span className="block text-sm font-normal">Seconds</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/happybirthday/password")}
          className="mt-10 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
        >
          Next 🎁
        </button>
      )}

      <div className="mt-10 text-xl">💗 Waiting for your special day 💗</div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        Current date: {exampleDate.toLocaleString()}
      </div>
    </div>
  );
}
