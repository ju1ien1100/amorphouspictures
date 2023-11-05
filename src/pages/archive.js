import React from "react";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router";

const images = [
    {
        id: 0,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled1.jpg'
    },
    {
        id: 1,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled2.jpg'
    },
    {
        id: 2,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled3.jpg'
    },
    {
        id: 3,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled4.jpg'
    },
    {
        id: 4,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled5.JPG'
    },
    {
        id: 5,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled6.jpg'
    },
    {
        id: 6,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled7.jpg'
    },
    {
        id: 7,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled8.jpg'
    },
    {
        id: 8,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled9.jpg'
    },
    {
        id: 9,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled10.jpg'
    },
    {
        id: 10,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled11.jpg'
    },
    {
        id: 11,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled12.jpg'
    },
    {
        id: 12,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled13.jpg'
    },
    {
        id: 13,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled14.png'
    },
    {
        id: 14,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled15.jpg'
    },
    {
        id: 15,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled16.jpg'
    },
    {
        id: 16,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled17.jpg'
    },
    {
        id: 17,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled18.jpg'
    },
    {
        id: 18,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled19.jpg'
    },
    {
        id: 19,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled20.jpg'
    },
    {
        id: 20,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled21.jpg'
    },
    {
        id: 21,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled22.jpg'
    },
    {
        id: 22,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled23.jpg'
    },
    {
        id: 23,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled24.jpg'
    },
    {
        id: 24,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled25.jpg'
    },
    {
        id: 25,
        image: process.env.PUBLIC_URL + '/pageContent/ArchivePhotos/untitled26.jpg'
    },
]


const Archive = () => {  
    const navigate = useNavigate();
    return (
        <div className='flex justify-center w-screen h-screen items-center overflow-y-auto'>
          <div className="flex-grow w-1/4 h-full p-5 mt-24">
              <div onClick={() => navigate('/menu')}>
                <img 
                  className="object-start h-[40px] w-[40px] cursor-pointer"
                  src={process.env.PUBLIC_URL + '/pageElements/Back_Arrow.svg.png'}
                  alt="Back Arrow">
                </img>
              </div>

            <h1 className="text-4xl custom-font-text text-bold p-4 mt-10">
              Archive
            </h1>
          </div>
          <div className="w-2/3 h-2/3 flex flex-wrap items-start justify-center p-4"> 
            {images.map((imageObj) => (
              <div key={imageObj.id} className="w-1/2 h-auto">
                <img 
                  className="w-full h-full"
                  src={imageObj.image} 
                  alt={`Archive Image ${imageObj.id}`} 
                  style={{ display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
    )
}



export default Archive