import Home from "./pages/home";
import SignInOut from "./pages/signInOut";
import AdminLogin from "./pages/adminLogin";
import AdminPortal from "./pages/adminPortal";
import Protected from "./components/protected";
import Authentication from "./components/authentication";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Protected Component={SignInOut} />} />
        <Route path="/home" element={<Protected Component={Home} />} />
        <Route path="/adminLogin" element={<Authentication Component={AdminLogin} />} />
        <Route path="/adminPortal" element={<Authentication Component={AdminPortal} />} />
      </Routes>
    </div>
  );
}

export default App;
