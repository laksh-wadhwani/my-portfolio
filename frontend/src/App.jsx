import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Toaster } from "sonner";
import Navbar from "./Components/Navbar.jsx";
import Project from "./Screens/Project.jsx";
import Login from "./Screens/Login.jsx";
import Admin from "./Screens/Admin.jsx";
import { BackendProvider } from "./BackendContext";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import LandingPage from "./Screens/LandingPage.jsx";

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token")
    if(storedToken) setToken(storedToken)
  },[token])

  return (
    <BackendProvider>
    <Router>
      <Navbar token={token} setToken={setToken}/>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/project/:slug" element={<Project token={token}/>} />
        <Route exact path="/auth" element={<Login setToken={setToken} />} />
        <Route exact path="/admin" element={<ProtectedRoute><Admin token={token}/></ProtectedRoute>} />
      </Routes>
      <Toaster richColors expand={true} closeButton position="top-center" duration={2000}/>
    </Router>
    </BackendProvider>
  );
}

export default App;
