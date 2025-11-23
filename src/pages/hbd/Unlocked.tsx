import { useState } from "react";
import FEB from "../../assets/pic/feb.jpg";
import MAR from "../../assets/pic/mar.jpg";
import APR from "../../assets/pic/apr.jpg";
import MAY from "../../assets/pic/may.jpg";
import JUNE from "../../assets/pic/june.jpg";
import JULY from "../../assets/pic/july.jpg";
import AUG from "../../assets/pic/aug.jpg";
import SEP from "../../assets/pic/sep.jpg";
import OCT from "../../assets/pic/oct.jpg";
import NOV from "../../assets/pic/nov.jpg";
import { useNavigate } from "react-router-dom";

const galleryData = [
  {
    name: "February",
    img: FEB,
  },
  { name: "March", img: MAR },
  { name: "April", img: APR },
  { name: "May", img: MAY },
  { name: "June", img: JUNE },
  { name: "July", img: JULY },
  { name: "August", img: AUG },
  { name: "September", img: SEP },
  { name: "October", img: OCT },
  { name: "November", img: NOV },
];

export default function UnlockedGallery() {
  const navigate = useNavigate();

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
            className={`relative bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl transition-transform max-h-[80vh] duration-300 ${
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
              className="w-full h-auto rounded-xl shadow-lg max-h-[60vh] object-cover"
              src={selectedMonth.img}
              alt={selectedMonth.name}
            />
          </div>
        </div>
      )}
      <button
        onClick={() => navigate("/happybirthday/message")}
        className="mt-10 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
      >
        Next →
      </button>
    </div>
  );
}
