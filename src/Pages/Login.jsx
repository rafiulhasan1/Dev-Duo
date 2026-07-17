import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-5">

      <div className="w-full max-w-md bg-slate-900 rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Login to continue
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none"
          />

          <div className="relative">

            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-5 text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-5 border border-cyan-500 text-white py-4 rounded-xl flex justify-center items-center gap-3 hover:bg-cyan-500"
        >
          <FaGoogle />
          Continue with Google
        </button>

        <p className="text-center text-gray-400 mt-8">

          Don't have an account?

          <Link
            to="/register"
            className="text-cyan-400 ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;