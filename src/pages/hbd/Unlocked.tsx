import { useState, useEffect } from "react";

const galleryData = [
  {
    name: "February",
    img: "https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=",
  },
  { name: "March", img: "/images/mar.jpg" },
  { name: "April", img: "/images/apr.jpg" },
  { name: "May", img: "/images/may.jpg" },
  { name: "June", img: "/images/jun.jpg" },
  { name: "July", img: "/images/jul.jpg" },
  { name: "August", img: "/images/aug.jpg" },
  { name: "September", img: "/images/sep.jpg" },
  { name: "October", img: "/images/oct.jpg" },
  { name: "November", img: "/images/nov.jpg" },
];

export default function UnlockedGallery() {
  const [selectedMonth, setSelectedMonth] = useState<null | {
    name: string;
    img: string;
  }>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (month: { name: string; img: string }) => {
    setSelectedMonth(month);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedMonth(null), 300); // wait for animation
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-gradient-to-tr from-pink-100 via-purple-100 to-yellow-100 overfloyw-y-auto">
      <h1 className="text-4xl font-bold mb-6 text-pink-600 animate-pulse">
        Birthday Memories Gallery
      </h1>
      <p className="text-lg mb-8 text-pink-700/80">
        Click on a month to preview 🎉
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-6xl">
        {galleryData.map((month) => (
          <div
            key={month.name}
            className="flex flex-col items-center p-2 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer border-2 border-pink-200"
            onClick={() => openModal(month)}
          >
            <img
              src={month.img}
              alt={month.name}
              className="w-32 h-32 object-cover rounded-xl mb-2 shadow-md"
            />
            <span className="text-sm font-semibold text-pink-600">
              {month.name}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMonth && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ background: "rgba(255, 182, 193, 0.5)" }}
          onClick={closeModal}
        >
          <div
            className={`relative bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl transition-transform duration-300 ${
              showModal ? "scale-100" : "scale-90"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-pink-600 font-bold text-2xl hover:text-pink-800 transition"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4 text-pink-600">
              {selectedMonth.name}
            </h2>
            <img
              src={selectedMonth.img}
              alt={selectedMonth.name}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
