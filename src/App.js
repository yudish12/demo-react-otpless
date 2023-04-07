import Login from "./Login";
import Home from "./Home";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;

      // Handle the signup/signin process
      // ...
    };
  }, []);
  return (
    <AnimatePresence>
      <img
        className="wave"
        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
        alt="sda"
      />
      <div className="container">
        <div className="img">
          <img
            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg"
            alt="sddz"
          />
        </div>
        {!login ? <Login /> : <Home />}
      </div>
      {/* <Home />; */}
    </AnimatePresence>
  );
}

export default App;
