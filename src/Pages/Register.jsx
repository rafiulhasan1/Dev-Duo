import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import {
    doc,
    setDoc,
    serverTimestamp,
    getFirestore,
    getDoc,
} from "firebase/firestore";
import app from "../firebase/firebase.config";

const db = getFirestore(app);

const Register = () => {
    const { createUser, googleLogin, updateUser } =
        useContext(AuthContext);

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        setError("");

        const form = e.target;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            return setError("Passwords do not match.");
        }

        if (password.length < 8) {
            return setError("Password must be at least 8 characters.");
        }

        if (!/[A-Z]/.test(password)) {
            return setError("Password must contain one uppercase letter.");
        }

        if (!/[a-z]/.test(password)) {
            return setError("Password must contain one lowercase letter.");
        }

        if (!/[0-9]/.test(password)) {
            return setError("Password must contain one number.");
        }

        if (!/[!@#$%^&*]/.test(password)) {
            return setError("Password must contain one special character.");
        }

        try {
            const result = await createUser(email, password);

            await updateUser({
                displayName: name,
            });

            await setDoc(doc(db, "users", result.user.uid), {
                uid: result.user.uid,
                name: name,
                email: email,
                phone: "",
                bio: "",
                github: "",
                linkedin: "",
                facebook: "",
                website: "",
                photoURL: "",
                role: "user",
                createdAt: serverTimestamp(),
                lastLogin: serverTimestamp(),
            });

            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleRegister = async () => {
        try {
            const result = await googleLogin();

            const user = result.user;

            const userRef = doc(db, "users", user.uid);

            const snap = await getDoc(userRef);

            if (!snap.exists()) {
                await setDoc(userRef, {
                    uid: user.uid,
                    name: user.displayName || "",
                    email: user.email,
                    phone: "",
                    bio: "",
                    github: "",
                    linkedin: "",
                    facebook: "",
                    website: "",
                    photoURL: user.photoURL || "",
                    role: "user",
                    createdAt: serverTimestamp(),
                    lastLogin: serverTimestamp(),
                });
            }

            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex justify-center items-center px-5">

            <div className="w-full max-w-md bg-slate-900 rounded-3xl p-8 shadow-2xl">

                <h1 className="text-4xl text-center text-white font-bold">
                    Create Account
                </h1>

                <p className="text-center text-gray-400 mt-2">
                    Register to access the portfolio
                </p>

                <form
                    onSubmit={handleRegister}
                    className="space-y-5 mt-8"
                >

                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none"
                    />

                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email"
                        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none"
                    />

                    <div className="relative">

                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Password"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none"
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

                    <input
                        name="confirmPassword"
                        type="password"
                        required
                        placeholder="Confirm Password"
                        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none"
                    />

                    {error && (
                        <p className="text-red-500 text-sm">
                            {error}
                        </p>
                    )}

                    <button
                        className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl text-white font-semibold"
                    >
                        Register
                    </button>

                </form>

                <button
                    onClick={handleGoogleRegister}
                    className="w-full mt-5 border border-cyan-500 py-4 rounded-xl text-white flex justify-center items-center gap-3 hover:bg-cyan-500 transition"
                >
                    <FaGoogle />
                    Continue with Google
                </button>

                <p className="text-center text-gray-400 mt-8">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-cyan-400 ml-2"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
};

export default Register;