import { useState } from "react";

export default function MessagePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-between bg-gradient-to-tr from-pink-100 via-purple-100 to-yellow-100 overflow-y-auto">
      <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">
        Happy Hannah's Birthday
      </h1>

      {/* Button below envelope */}

      {/* Envelope (fixed center) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 flex items-end justify-start z-10">
        <div>
          {/* Envelope body */}
          <div
            className={`
            w-80 h-48 bg-pink-200 rounded-b-xl shadow-xl border border-pink-300
            transition-all duration-700
            ${open ? "shadow-2xl" : ""}
          `}
          ></div>

          {/* Envelope flap */}
          <div
            className={`
    absolute top-0 left-1/2 -translate-x-1/2
    w-80 h-40 bg-pink-300 rounded-t-xl
    origin-top transition-transform duration-700
    ${open ? "rotate-x-180" : "rotate-x-0"}
    grid grid-cols-8 grid-rows-4 gap-1 p-2
  `}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Fill flap with ♡ hearts */}
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="text-white text-xl flex items-center justify-center"
              >
                ♡
              </div>
            ))}
          </div>
        </div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 mt-44 z-20">
          {!open ? (
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 text-nowrap bg-pink-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-pink-600 transition transform hover:scale-105"
            >
              เปิดจดหมาย 💌
            </button>
          ) : (
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-pink-600 transition transform hover:scale-105 text-nowrap"
            >
              ปิดจดหมาย 💌
            </button>
          )}
        </div>
      </div>

      {/* Letter (always centered above envelope) */}
      <div
        className={`
          fixed top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-700
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          z-20
        `}
      >
        <div
          className="
    w-80 bg-white p-6 rounded-xl shadow-xl border-2 border-pink-200
    bg-[url('https://www.transparenttextures.com/patterns/cream-pixels.png')]
    bg-repeat
    flex flex-col
  "
          style={{ backgroundColor: "#fffdf7" }}
        >
          <p className="text-lg text-pink-700 leading-relaxed mb-2">
            สุขสันต์วันเกิดนะคะคนเก่ง! มีความสุขมาก ๆ นะคะ
            ขอบคุณที่อยู่ด้วยกันมาตั้งแต่ต้นปีจนถึงตอนนี้เลยนะ อยู่กับเค้าไปนาน
            ๆ นะคะ 💖
          </p>

          <p className="text-lg text-pink-700 leading-relaxed mb-2">
            ปีนี้เตรียมอะไรไม่ค่อยทัน กิกิ เอาอันนี้ไปแทนก่อนนะคะ ✨
          </p>

          <p className="text-lg text-pink-700 leading-relaxed mb-1 text-end">
            รักนะคะ 💕
          </p>
          <p className="text-lg text-pink-700 leading-relaxed text-end">
            tyty :)
          </p>
        </div>
      </div>
    </div>
  );
}
