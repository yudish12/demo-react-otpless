import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className="login-content">
      <form>
        <img
          src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg"
          alt="asd"
        />
        <h2 className="title">Welcome</h2>
        <div className="input-div one">
          <div className="i">
            <FaUser className="fas fa-user icon"></FaUser>
          </div>
          <div className="div">
            <h5>Username</h5>
            <input type="text" className="input" />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <FaLock className="fas fa-lock icon"></FaLock>
          </div>
          <div className="div">
            <h5>Password</h5>
            <input type="password" className="input" />
          </div>
        </div>
        <a href="#">Forgot Password?</a>
        <input type="submit" className="btn" value="Login" />
      </form>
    </div>
  );
};

export default Login;
