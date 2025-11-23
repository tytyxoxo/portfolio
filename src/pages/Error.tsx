// src/pages/NotFound.tsx
import FuzzyText from "@/components/ui/fuzzytext"; // adjust the path as needed
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent  text-white p-4">
      <FuzzyText message={"404"} />
      <p className="mt-6 text-lg text-gray-400">Oops! Page not found.</p>
      <Link
        to="/"
        className="mt-4 text-orange-400 underline hover:text-orange-300 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
