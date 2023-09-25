import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/menu.css"

const Menu = () => { 
    const navigate = useNavigate();

    const handleMediaClick = (e) => {
        navigate("/media");
    };

    const handleRadioClick = (e) => {
        navigate("/radio");
    };

    const handleAboutClick = (e) => {
        navigate("/about");
    };

    const handleResearchClick = (e) => {
        navigate("/research");
    };


     
    return (
        <div className="flex-col items-center justify-between h-screen w-screen">
            <div className="flex-row animation-container w-full">
                <img className="moving-image1" src={process.env.PUBLIC_URL + '/pageElements/logo.png'} alt="Moving Image" />
                <img className="moving-image2" src={process.env.PUBLIC_URL + '/pageElements/logo.png'} alt="Moving Image" />
                <img className="moving-image3" src={process.env.PUBLIC_URL + '/pageElements/logo.png'} alt="Moving Image" />
            </div>
            <div className="">

            </div>
            <ul className="flex flex-col items-center justify-center">
                <h1 
                className="custom-font-text text-4xl align-center p-1 cursor-pointer"
                onClick={handleMediaClick}>
                    Media
                </h1>
                <h1 
                className="custom-font-text text-4xl align-center p-1 cursor-pointer"
                onClick={handleRadioClick}>
                    Radio
                </h1>
                <h1 
                className="custom-font-text text-4xl align-center p-1 cursor-pointer"
                onClick={handleAboutClick}
                >About
                </h1>
                <h1 
                className="custom-font-text text-4xl align-center p-1 cursor-pointer"
                onClick={handleResearchClick}>R&D</h1>
            </ul>
        </div>
    )
 }

export default Menu