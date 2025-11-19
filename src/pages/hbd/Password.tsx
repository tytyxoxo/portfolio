import { Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Password() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPasscode = "241142";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === correctPasscode) {
      setError("");
      navigate("/happybirthday/unlocked"); // Change this to your target route
    } else {
      setError("Incorrect passcode! Try again.");
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 p-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Lock /> Enter Passcode
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter passcode"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
        >
          Unlock
        </button>
      </form>

      <p className="mt-6 text-gray-600 dark:text-gray-300 text-sm">
        Hint: Use the special birthday code 🎂
      </p>
    </div>
  );
}
