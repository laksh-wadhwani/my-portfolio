import InputField from "../Components/InputField.jsx";
import { useState } from "react";
import axios from "axios"
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { BackendURL } from "../BackendContext.jsx";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";

const Login = ({setToken}) => {

  const API = BackendURL()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (name, value) => {
    setUser((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  const Login = () => {
    setLoading(true)
    axios.post(`${API}/admin/auth/login`, user)
    .then(response => {
      sessionStorage.setItem("token", response.data.token)
      setToken(response.data.token)
      toast.success(response.data.message)
      navigate("/admin")
    })
    .catch(error => {
      toast.error(error.response?.data?.message || "Login Failed")
    })
    .finally(() => setLoading(false))
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-[#1d1d1d] border border-[#2c2c2c] rounded-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-serif text-4xl tracking-tight">Welcome Back</h1>
          <p className="text-gray-400 font-light font-serif">
            Login to access your dashboard
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            onChange={e => handleChange("email", e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder={"••••••••"}
            onChange={e => handleChange("password", e.target.value)}
          />
        </div>

        <button 
          className="mt-4 py-3 rounded-lg bg-[#dac5a7] border text-black font-serif text-xl font-medium transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-[0_10px_25px_rgba(218,197,167,0.4)] hover:bg-transparent hover:border-[#dac5a7] hover:text-white flex justify-center items-center"
          onClick={Login} disabled={loading}>
            <LoadingSpinner text={`Login`} loading={loading}/>
        </button>
      </div>
    </div>
  );
};

export default Login;
