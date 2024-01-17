import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css"

const Home = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleProjectClick = (e) => {
    navigate("/projects");
};

const handleAboutClick = (e) => {
  navigate("/about");
};

const handleArchiveClick = (e) => {
  navigate("/archive");
};



  const handleClick = () => {
    // Trigger your animation here
    setIsClicked(true);

    // Delay the route change for the animation
    setTimeout(() => {
      navigate("/menu");
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div className="flex bg-D9D9D9 overflow-y-auto h-screen hide-scrollbar">
      <div className="flex-col pb-96 pt-10 overflow-y-auto hide-scrollbar">

      <div className="flex justify-center align-center items-center">
        <h1 
            className="custom-font-text text-3xl align-center cursor-pointer"
            onClick={handleProjectClick}>
                Projects
          </h1>

      </div> 
      <div className="flex-col justify-center w-full">
      <img
          className="lg:w-2/3 lg:h-1/4 mx-auto my-auto mt-1"
          src={process.env.PUBLIC_URL + '/pageElements/logo_transparent.png'}
          alt="logo"
        />
      </div>
      <div className="flex justify-center pb-72">
        <h1 
            className="custom-font-text text-3xl cursor-pointer"
            onClick={handleAboutClick}>
                Contact
          </h1>
          <div className="w-1/3 p-5">
          </div>
          <h1 
            className="custom-font-text text-3xl cursor-pointer"
            onClick={handleArchiveClick}>
                Archive
          </h1>

      </div> 
    </div>
    <div className="flex pb-96">
        
      </div>
    </div>
    
  );
};

export default Home;

// <div
    //   className={`flex justify-center items-center ${
    //     isClicked ? "animated-up" : ""
    //   }`}
    // >
    //   <div className="flex-grow-1 w-1/2 items-center justify-center">
    //     <img
    //       className={`mx-auto my-auto ${isClicked ? "animate-your-animation-class" : ""}`}
    //       src={process.env.PUBLIC_URL + '/pageElements/logo.png'}
    //       alt="logo"
    //     />
    //   </div>
    //   <div className="h-[500px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-black to-transparent opacity-20 dark:opacity-100"></div>
    //   <div className="flex-grow-1 w-1/2 flex items-center justify-center p-5">
    //     <h1
    //       className={`text-5xl custom-font-text text-center ${isClicked ? "animate-your-animation-class" : ""}`}
    //       onClick={handleClick}
    //     >
    //       Producing Images for Spaceship Earth
    //     </h1>
    //   </div>
    // </div>
