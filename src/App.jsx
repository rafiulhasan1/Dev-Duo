import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navber";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MemberDetails from "./Pages/MemberDetails";

import PrivateRoute from "./Routes/PrivateRoute";
import MyProfile from "./Pages/MyProfile";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/member/:slug"
          element={
            <PrivateRoute>
              <MemberDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center text-5xl">
                Dashboard
              </div>
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center text-5xl">
                <MyProfile/>
              </div>
            </PrivateRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;