import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="text-center max-w-xl">

        <FaExclamationTriangle className="mx-auto text-7xl text-cyan-400 mb-6" />

        <h1 className="text-8xl font-extrabold text-white">
          404
        </h1>

        <h2 className="text-3xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Sorry, the page you are looking for doesn't exist
          or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-white font-semibold transition"
        >
          <FaHome />

          Back To Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;