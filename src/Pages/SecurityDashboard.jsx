import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import {
    FaShieldAlt,
    FaCheckCircle,
    FaClock,
    FaLock,
    FaGoogle,
    FaEnvelope,
} from "react-icons/fa";

const SecurityDashboard = () => {

    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            if (!user) return;

            const snap = await getDoc(doc(db, "users", user.uid));

            if (snap.exists()) {
                setUserData(snap.data());
            }
        };

        loadUser();
    }, [user]);

    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 py-10 mt-16">

            <div className="max-w-5xl mx-auto">

                <div className="flex items-center gap-3 mb-8">

                    <FaShieldAlt className="text-cyan-400 text-4xl" />

                    <h1 className="text-4xl font-bold">
                        Security Dashboard
                    </h1>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <div className="flex items-center gap-3">

                            <FaEnvelope className="text-green-400 text-2xl" />

                            <div>

                                <h2 className="font-semibold">
                                    Email Verification
                                </h2>

                                <p className="text-gray-400">
                                    {user?.emailVerified
                                        ? "Verified"
                                        : "Not Verified"}
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <div className="flex items-center gap-3">

                            <FaLock className="text-green-400 text-2xl" />

                            <div>

                                <h2 className="font-semibold">
                                    Password Recovery
                                </h2>

                                <p className="text-gray-400">
                                    Enabled
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <div className="flex items-center gap-3">

                            <FaCheckCircle className="text-green-400 text-2xl" />

                            <div>

                                <h2 className="font-semibold">
                                    Login Protection
                                </h2>

                                <p className="text-gray-400">
                                    3 Attempts Lock Enabled
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <div className="flex items-center gap-3">

                            <FaClock className="text-green-400 text-2xl" />

                            <div>

                                <h2 className="font-semibold">
                                    Session Timeout
                                </h2>

                                <p className="text-gray-400">
                                    Active
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <div className="flex items-center gap-3">

                            <FaGoogle className="text-green-400 text-2xl" />

                            <div>

                                <h2 className="font-semibold">
                                    Google Authentication
                                </h2>

                                <p className="text-gray-400">
                                    Supported
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <div>

                            <h2 className="font-semibold text-xl mb-3">
                                Security Score
                            </h2>

                            <div className="w-full bg-slate-700 rounded-full h-4">

                                <div className="bg-cyan-400 h-4 rounded-full w-[95%]"></div>

                            </div>

                            <p className="mt-3 text-cyan-400 font-bold text-3xl">
                                95 / 100
                            </p>

                        </div>

                    </div>

                    <div  className="bg-slate-900 rounded-2xl p-6">
                        <p className="text-gray-400">
                            {userData?.lastLogin
                                ? userData.lastLogin.toDate().toLocaleString()
                                : "First Login"}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SecurityDashboard;