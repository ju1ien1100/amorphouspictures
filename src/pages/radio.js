import React from "react"
import { useNavigate } from "react-router"
const Radio = () => {  
    const navigate = useNavigate();
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
            <div className="flex flex-row">
                <div className="flex flex-row w-1/2 items-center justify-center p-6 border-black">
                    <img 
                    className={`object-cover cursor-pointer`}
                    src={process.env.PUBLIC_URL + '/pageElements/SpinningFonk.png'}>
                    </img>
                </div>
                <div className="mt-20 h-[500px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-black to-transparent opacity-20 dark:opacity-100"></div>
                <div className="flex flex-row w-1/2 items-center">
                    <h1 className={`text-3xl custom-font-text text-bold p-6 text-center text-center`}>
                    The best radio station
                    in the world. Weekly 
                    episodes on 101.9FM 
                    the Canadian FM radio 
                    station. Playing every
                    Monday at 17:30. 
                    </h1>
                </div>

            </div>
          </div>
          <div className="flex-grow-1 w-1/2 flex items-center justify-center">
            <div className='p-1 w-2/3'>
            <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1690914582&color=%23434343&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
          </div>
        </div>
    )
 }

export default Radio