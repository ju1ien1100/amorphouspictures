import React from "react";

const Projects = () => {  
    return (
        <div className="flex flex-col items-center w-screen h-screen overflow-y-auto hide-scrollbar">
                <div className="flex lg:justify-center w-full m-4">
                    <iframe 
                        className="flex w-full lg:justify-center aspect-video m-4 border-4 border-black"
                        title="Passenger"
                        src="https://player.vimeo.com/video/517326365?h=ff0510ed36" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>

                <div className="flex lg:justify-center w-full m-4 pb-32">
                    <iframe 
                        className="flex w-full lg:justify-center aspect-video m-4 border-4 border-black"
                        title="Purple Walls"
                        src="https://player.vimeo.com/video/744356483?h=254820d3e7&title=0&byline=0&portrait=0"
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="pb-64">

                </div>
        </div>
    )
}

export default Projects;

