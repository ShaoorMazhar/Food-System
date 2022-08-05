import Home from "./pages/home";
import SignInOut from "./pages/signInOut";
import AdminLogin from "./pages/adminLogin";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userLogin" element={<SignInOut />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
