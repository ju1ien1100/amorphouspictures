import React from "react";
import { useNavigate } from "react-router";

const Projects = () => {  
    const navigate = useNavigate();
    return (
        <div className="flex flex-grow flex-col justify-center items-center w-screen h-screen overflow-y-auto">
                <div className="flex flex-grow justify-center w-2/3 m-4 lg:mt-80">
                    <iframe 
                        className="flex flex-grow justify-center aspect-video"
                        title="Passenger"
                        src="https://player.vimeo.com/video/517326365?h=ff0510ed36" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>

                <div className="flex flex-grow justify-center w-2/3 m-4">
                    <iframe 
                        className="flex flex-grow justify-center aspect-video"
                        title="Purple Walls"
                        src="https://player.vimeo.com/video/744356483?h=254820d3e7&title=0&byline=0&portrait=0"
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
        </div>
    )
}

export default Projects;

{/* <div className='flex justify-center w-screen h-screen items-center overflow-y-auto'>
            <div className="flex-grow w-1/3 h-full p-5 mt-24">
                <div onClick={() => navigate('/menu')}>
                    <img 
                      className={`object-start h-[40px] w-[40px] cursor-pointer`}
                      src={process.env.PUBLIC_URL + '/pageElements/Back_Arrow.svg.png'}>
                    </img>
                </div>
                <h1 className={`text-4xl custom-font-text text-bold p-4 mt-10`}>
                  Projects
                </h1>
            </div>
            
            <div className="flex flex-col w-2/3 h-full p-35">
                <div className="flex-grow relative mb-4 mt-40">
                    <iframe 
                        className="absolute top-0 left-0 w-2/3 h-full"
                        src="https://player.vimeo.com/video/517326365?h=ff0510ed36" 
                        frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="flex-grow relative">
                    <iframe 
                        className="absolute top-0 left-0 w-2/3 h-full" 
                        src="https://www.youtube.com/embed/ayb8YbHA2m8?si=4DDbYbxFDwpQpVvz" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div> */}
