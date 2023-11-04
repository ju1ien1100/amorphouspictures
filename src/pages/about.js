import React from "react"
import { useNavigate } from "react-router-dom"

const About = () => {  
  const navigate = useNavigate()
    return (
        <div className='flex justify-center w-screen h-screen items-center'>
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
        </div>
    )
}

export default About