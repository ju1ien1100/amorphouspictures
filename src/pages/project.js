import React from "react";

const Projects = () => {  
    return (
        <div className="flex flex-col items-center w-screen h-screen overflow-y-auto hide-scrollbar">
                <div className="flex flex-col lg:justify-center w-2/3 m-4">
                    <h1 className="lg:text-3xl text font-bold custom-font-text lg:mx-4">PASSENGER</h1>
                    <h1 className="lg:text-xl text custom-font-text lg:mx-4">DIRECTOR/WRITER</h1>
                    <iframe 
                        className="flex w-full lg:justify-center aspect-video lg:mx-4 border-4 border-black bg-black"
                        title="Passenger"
                        src="https://player.vimeo.com/video/517326365?h=ff0510ed36&title=0&byline=0&portrait=0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="flex flex-col lg:justify-center w-2/3 m-4">
                    <h1 className="lg:text-3xl text font-bold custom-font-text lg:mx-4">RUN FOR THE HILLS (VFW)</h1>
                    <h1 className="lg:text-xl text custom-font-text lg:mx-4">CINEMATOGRAPHER/PRODUCER</h1>
                    <iframe 
                        className="flex w-full lg:justify-center aspect-video lg:mx-4 border-4 border-black bg-black"
                        title="Purple Walls"
                        src="https://player.vimeo.com/video/1019253862?h=894e959b34&title=0&byline=0&portrait=0"
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>

                <div className="flex flex-col lg:justify-center w-2/3 m-4">
                    <h1 className="lg:text-3xl text font-bold custom-font-text lg:mx-4">PURPLE WALLS (070 SHAKE)</h1>
                    <h1 className="lg:text-xl text custom-font-text lg:mx-4">2ND ASSISTANT CAMERA</h1>
                    <iframe 
                        className="flex w-full lg:justify-center aspect-video lg:mx-4 border-4 border-black bg-black"
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

