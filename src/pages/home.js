import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css"

const Home = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // Trigger your animation here
    setIsClicked(true);

    // Delay the route change for the animation
    setTimeout(() => {
      navigate("/menu");
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div
      className={`flex justify-center items-center ${
        isClicked ? "animated-up" : ""
      }`}
    >
      <div className="flex-grow-1 w-1/2 items-center justify-center">
        <img
          className={`mx-auto my-auto ${isClicked ? "animate-your-animation-class" : ""}`}
          src={process.env.PUBLIC_URL + '/pageElements/logo.png'}
          alt="logo"
        />
      </div>
      <div className="h-[500px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-black to-transparent opacity-20 dark:opacity-100"></div>
      <div className="flex-grow-1 w-1/2 flex items-center justify-center p-5">
        <h1
          className={`text-5xl custom-font-text text-center ${isClicked ? "animate-your-animation-class" : ""}`}
          onClick={handleClick}
        >
          Producing Images for Spaceship Earth
        </h1>
      </div>
    </div>
  );
};

export default Home;
