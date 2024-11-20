import React from "react"
import { useNavigate } from "react-router-dom"

const About = () => {  
  const emailAddress = "gabeporath@gmail.com";
    return (
        <div className="bg-D9D9D9 flex flex-row overflow-y-auto max-h-screen ">

          <div className="flex-row items-center overflow-y-auto pt-10 hide-scrollbar">

                        {/* 
              contact
            */}
            <div className="flex flex-col justify-center align-center items-center m-8">
              <h1 className="custom-font-text text-2xl p-3">
                CONTACT
              </h1>
              <h1 className="custom-font-text text-2xl p-3">
                GABEPORATH@GMAIL.COM
              </h1>
              <h1 className="custom-font-text text-2xl p-3 hover:underline">
                <a href={`mailto:${emailAddress}`} className="custom-font-text text-2xl p-3">
                  EMAIL FOR CV/RESUME
                </a>
              </h1>

            </div>

            {/* 
              descr.
            */}
            <div className="flex flex-col justify-center align-center items-center m-4 mt-8 pb-16">
              <h1 className="custom-font-text text-2xl">
                ABOUT
              </h1>
              <h1 className="custom-font-text text-2xl lg:w-1/3 text-center p-1">
              GABRIEL PORATH IS A BRAZILIAN-AMERICAN FILMMAKER BASED IN VANCOUVER AND LOS ANGELES, PRODUCING WORKS IN FILM, PHOTOGRAPHY, RADIO, AND UI/UX DESIGN.

              </h1>

            </div>


            


            {/* 
              photo
            */}
            <div className="flex flex-row justify-center items-center m-12 mt-0">
              <img
              className={`mx-auto my-auto border border-black border-4 w-1/2`}
              src={process.env.PUBLIC_URL + '/pageElements/AboutPhoto.jpg'}
              alt="logo"
              />
            </div>
            <div className="pb-64"></div>

            
            
          </div>
        </div>
    )
}

export default About

{/* <div className='flex justify-center w-screen h-screen items-center'>
          <div className="flex-grow w-1/2 h-full p-5 mt-24">
              <div
              onClick={() => navigate('/menu')}>
                <img 
                  className={`object-start h-[40px] w-[40px] cursor-pointer`}
                  src={process.env.PUBLIC_URL + '/pageElements/Back_Arrow.svg.png'}>
                </img>
              </div>

            <h1 className={`text-4xl custom-font-text text-bold p-4 mt-10`}>
              About
            </h1>
            <h1 className={`sm:text-1xl text-2xl custom-font-text text-bold mt-12 pl-10 leading-relaxed`}>
              Gabriel Porath is a Brazilian/American 
              filmmaker from the Pacific Northwest 
              based in in British Columbia and 
              California. Through his production 
              company, Amorphous Pictures, 
              he has been independently 
              producing multimedia works since 
              2019 including films, 
              photography, and radio.
            </h1>
          </div>
          <div className="mt-40 h-[500px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-black to-transparent opacity-20 dark:opacity-100"></div>
          <div className="flex-grow-1 w-1/2 flex items-center justify-center">
            <img
              className={`mx-auto my-auto object-cover h-[500px] w-[400px] `}
              src={process.env.PUBLIC_URL + '/pageElements/GabeImage.jpg'}
              alt="logo"
            />
          </div>
        </div> */}