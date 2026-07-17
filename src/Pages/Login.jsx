import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
    const {
        login,
        googleLogin,
        resetPassword,
        logout,
    } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state || "/";

    const emailRef = useRef();

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await login(email, password);

            if (!result.user.emailVerified) {

                alert("Please verify your email first.");

                await logout();

                return;
            }

            navigate(from);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        setError("");

        try {
            await googleLogin();

            navigate(from);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleForgotPassword = async () => {
        setError("");
        setSuccess("");

        const email = emailRef.current.value.trim();

        if (!email) {
            return setError("Please enter your email first.");
        }

        try {
            await resetPassword(email);

            setSuccess(
                "Password reset email has been sent. Please check your inbox."
            );
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">

            <div className="w-full max-w-md bg-slate-900 rounded-3xl shadow-2xl p-8">

                <h1 className="text-4xl font-bold text-center text-white">
                    Welcome Back
                </h1>

                <p className="text-center text-gray-400 mt-3">
                    Login to continue
                </p>

                <form
                    onSubmit={handleLogin}
                    className="space-y-5 mt-8"
                >

                    <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
                    />

                    <div className="relative">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            required
                            placeholder="Password"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="absolute right-5 top-5 text-gray-400"
                        >
                            {showPassword ? (
                                <FaEyeSlash />
                            ) : (
                                <FaEye />
                            )}
                        </button>

                    </div>

                    <div className="text-right">

                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="text-cyan-400 hover:underline text-sm"
                        >
                            Forgot Password?
                        </button>

                    </div>

                    {error && (
                        <p className="text-red-500 text-sm">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="text-green-500 text-sm">
                            {success}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-semibold transition"
                    >
                        Login
                    </button>

                </form>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full mt-5 border border-cyan-500 py-4 rounded-xl text-white flex justify-center items-center gap-3 hover:bg-cyan-500 transition"
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