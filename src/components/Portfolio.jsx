'use client';

import React, { useState } from "react";
import { book_images, powerpoint_images, react_images, Image_images } from "@/constants/constants";
import Title from "./Title";

const Portfolio = () => {
    const [selectedImages, setSelectedImages] = useState(react_images);

    return (
        <div className="min-h-screen " data-aos="fade-up" data-aos-duration="1000">
            <div className="bg-[#f4fafd] py-10 flex flex-col items-center  ">
                <div className="container mb-24">
                    <Title>Portfolio</Title>
                    <p className="mt-4 text-gray-700 text-left ">
                        This portfolio showcases my skills and experience in web development and design. It highlights my expertise in creating dynamic, user-friendly digital solutions.
                    </p>

                    <div className="font-bold mt-8 flex flex-wrap items-center justify-center gap-6 text-sm md:text-base cursor-pointer">
                        <span onClick={() => setSelectedImages(react_images)} className={`${selectedImages === react_images ? "text-primary underline" : "text-black"} hover:text-primary`}>React</span>
                        <span onClick={() => setSelectedImages(book_images)} className={`${selectedImages === book_images ? "text-primary underline" : "text-black"} hover:text-primary`}>Book Formatting</span>
                        <span onClick={() => setSelectedImages(Image_images)} className={`${selectedImages === Image_images ? "text-primary underline" : "text-black"} hover:text-primary`}>Image Editing</span>
                        <span onClick={() => setSelectedImages(powerpoint_images)} className={`${selectedImages === powerpoint_images ? "text-primary underline" : "text-black"} hover:text-primary`}>PowerPoint</span>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
                        {selectedImages.map((project, index) => (
                            <div key={index} data-aos="fade-up" data-aos-duration="1000" className="overflow-hidden rounded-lg shadow-md">
                                <img
                                    className="w-full h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-110 transform-origin-center hover:brightness-50"
                                    src={project.image}
                                    alt={`Project ${index + 1}`}
                                    width={400}
                                    height={300}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;
