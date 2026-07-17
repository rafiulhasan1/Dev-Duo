import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { db } from "../firebase/firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    github: "",
    linkedin: "",
    facebook: "",
    website: "",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      if (!user) return;

      try {
        const docRef = doc(db, "users", user.uid);
        const snap = await getDoc(docRef);

        if (snap.exists()) {
          setProfile(snap.data());
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    loadProfile();
  }, [user]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "users", user.uid);

      await updateDoc(docRef, {
        name: profile.name,
        phone: profile.phone,
        bio: profile.bio,
        github: profile.github,
        linkedin: profile.linkedin,
        facebook: profile.facebook,
        website: profile.website,
      });

      setMessage("✅ Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      setMessage("❌ Update Failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-10 px-5 ">

      <div className="max-w-3xl mx-auto bg-slate-900 rounded-3xl p-8 shadow-xl">

        <h1 className="text-4xl font-bold text-white text-center mt-5 mb-8">
          My Profile
        </h1>

        <form onSubmit={handleUpdate} className="text-xl space-y-5">

          <div>
            <label className="text-gray-400">Full Name</label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="text-gray-400">Email</label>

            <input
              type="email"
              value={profile.email}
              readOnly
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 text-gray-400"
            />
          </div>

          <div>
            <label className="text-gray-400">Phone</label>

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="text-gray-400">Bio</label>

            <textarea
              rows="4"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="text-gray-400">GitHub</label>

            <input
              type="text"
              name="github"
              value={profile.github}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="text-gray-400">LinkedIn</label>

            <input
              type="text"
              name="linkedin"
              value={profile.linkedin}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="text-gray-400">Facebook</label>

            <input
              type="text"
              name="facebook"
              value={profile.facebook}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="text-gray-400">Website</label>

            <input
              type="text"
              name="website"
              value={profile.website}
              onChange={handleChange}
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 text-white"
            />
          </div>

          {message && (
            <p className="text-center text-green-400 font-semibold">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl text-white font-semibold"
          >
            Update Profile
          </button>

        </form>

      </div>

    </div>
  );
};

export default MyProfile;