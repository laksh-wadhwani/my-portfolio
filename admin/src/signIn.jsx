import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";


const SignIn = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/Admin")
    }

    return(
        <React.Fragment>
            <div className="main-box">
                <div className="main-box sign-box">
                    <h3>Sign In</h3>
                    <div className="main-box input-fields">
                        <input type="email" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <button onClick={handleLogin}>Sign In</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignIn;