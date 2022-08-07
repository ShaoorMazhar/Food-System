import Home from "./pages/home";
import SignInOut from "./pages/signInOut";
import AdminLogin from "./pages/adminLogin";
import AdminPortal from "./pages/adminPortal";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignInOut />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminPortal" element={<AdminPortal />} />
      </Routes>
    </div>
  );
}

export default App;
