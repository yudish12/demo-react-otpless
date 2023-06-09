import React from "react";
import { motion as m } from "framer-motion";
const Home = ({ name, number, setLogin }) => {
  const logout = () => {
    localStorage.clear();
    setLogin(false);
  };
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <img
        className="wave"
        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
        alt="sda"
      />
      <div className="home-content">
        <img
          className="tick"
          src="https://media.tenor.com/bm8Q6yAlsPsAAAAi/verified.gif"
          alt="sddz"
        />
        <div className="creds">
          <h2>Hello {name}</h2>
          <h4>Logged In From number {number}</h4>
          <button
            onClick={logout}
            className="button"
            style={{ verticalAlign: "middle" }}
          >
            <span>Logout </span>
          </button>
        </div>
      </div>
    </m.div>
  );
};

export default Home;
