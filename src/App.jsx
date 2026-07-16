import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navber";
import Home from "./Pages/Home";
import MemberDetails from "./Pages/MemberDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:slug" element={<MemberDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;