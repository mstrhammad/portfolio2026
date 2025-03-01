
'use client'


import React, { useState } from "react";
import { book_images, powerpoint_images, react_images, Image_images } from "@/constants/constants";


import Title from "./Title";




const Portfolio = () => {

    const [selectedImages, setSelectedImages] = useState(react_images);


    const reactButton = () => {
        setSelectedImages(react_images);
    }
    const bookButton = () => {
        setSelectedImages(book_images);
    }
    const imageButton = () => {
        setSelectedImages(Image_images);
    }
    const powerpointButton = () => {
        setSelectedImages(powerpoint_images);
    }



    return (
        <>
            <div className="min-h-[95vh] mx-36">
                <div className="bg-[#f4fafd] -mx-[144px] h-screen -mt-16 flex ">
                    <div className="mx-36 mt-10">
                        <Title>Portfolio</Title>
                        <p className="mt-4 text-gray-700">
                            This portfolio showcases my skills and experience in web development and design. It highlights my expertise in creating dynamic, user-friendly digital solutions.
                        </p>

                        <div >
                            <div className="font-bold mt-16 flex items-center justify-center gap-10 cursor-pointer ">

                                <span href="" onClick={() => reactButton("React")} className={`${selectedImages === react_images ? "text-primary underline" : "text-black "} hover:text-primary`} >React</span>
                                <span onClick={() => bookButton("Book")} className={`${selectedImages === book_images ? "text-primary underline" : "text-black"} hover:text-primary`}>Book-Formatting</span>
                                <span onClick={() => imageButton(selectedImages)} className={`${selectedImages === Image_images ? "text-primary underline" : "text-black"} hover:text-primary`}>Image-Editing</span>
                                <span onClick={() => powerpointButton(selectedImages)} className={`${selectedImages === powerpoint_images ? "text-primary underline" : "text-black"} hover:text-primary`}>PowerPoint</span>
                            </div>
                            <div className='grid grid-cols-3 mt-10 justify-between gap-3'>
                                {
                                    selectedImages.map((project, index) => {
                                        return <div key={1} >
                                            <img className='mb-3 w-30 h-60 object-cover rounded-lg' src={project.image} alt='dp' width={400} height={300}></img>
                                        </div>
                                    })
                                }
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
