'use client';

import React, { useState } from "react";
import {
    book_images,
    powerpoint_images,
    react_images,
    Image_images,
} from "@/constants/constants";
import Title from "./Title";

const Portfolio = () => {
    const [selectedImages, setSelectedImages] = useState(react_images);

    const techStack = [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TensorFlow",
        "OpenCV",
        "JWT",
        "Firebase",
    ];

    const infoCards = [
        {
            title: "Role",
            value: "Full Stack Mobile App Developer",
        },
        {
            title: "Type",
            value: "Final Year Project",
        },
        {
            title: "Status",
            value: "Under Development",
        },
    ];

    return (
        <>
            {/* Portfolio Section */}
            <div
                id="portfolio"
                className="min-h-screen flex items-center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="bg-[#f4fafd] py-12 flex flex-col items-center w-full">
                    <div className="container">
                        <Title>Portfolio</Title>

                        <p className="mt-4 text-gray-700 text-left">
                            This portfolio showcases my skills and experience in web development and
                            design. It highlights my expertise in creating dynamic, user-friendly
                            digital solutions.
                        </p>

                        <div className="font-bold mt-8 flex flex-wrap items-center justify-center gap-6 text-sm md:text-base cursor-pointer">
                            <span
                                onClick={() => setSelectedImages(react_images)}
                                className={`${selectedImages === react_images
                                        ? "text-primary underline"
                                        : "text-black"
                                    } hover:text-primary`}
                            >
                                React
                            </span>

                            <span
                                onClick={() => setSelectedImages(book_images)}
                                className={`${selectedImages === book_images
                                        ? "text-primary underline"
                                        : "text-black"
                                    } hover:text-primary`}
                            >
                                Book Formatting
                            </span>

                            <span
                                onClick={() => setSelectedImages(Image_images)}
                                className={`${selectedImages === Image_images
                                        ? "text-primary underline"
                                        : "text-black"
                                    } hover:text-primary`}
                            >
                                Image Editing
                            </span>

                            <span
                                onClick={() => setSelectedImages(powerpoint_images)}
                                className={`${selectedImages === powerpoint_images
                                        ? "text-primary underline"
                                        : "text-black"
                                    } hover:text-primary`}
                            >
                                PowerPoint
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                            {selectedImages.map((project, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="overflow-hidden rounded-lg shadow-md"
                                >
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

            {/* Experience Section Anchor */}
            <div id="experience" className="scroll-mt-24"></div>

            {/* Experience Section */}
            <div
                className="min-h-screen flex items-center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="bg-[#f4fafd] py-16 flex flex-col items-center w-full">
                    <div className="container">
                        <Title>Experience</Title>

                        <p className="mt-4 text-gray-700 text-left">
                            A focused showcase of my practical development experience, including
                            academic projects where I worked on real-world problem solving, mobile app
                            development, backend integration, and AI-based features.
                        </p>

                        <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="p-5 md:p-6">
                                <p className="text-primary font-bold text-sm md:text-base">
                                    Final Year Project
                                </p>

                                <h3 className="mt-2 text-xl md:text-2xl font-bold text-gray-900">
                                    Smart Multi-University Item Recovery System
                                </h3>

                                <p className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base">
                                    Smart Multi-University Item Recovery System is an AI-powered mobile
                                    application designed to help students, faculty, and university staff
                                    recover lost and found items efficiently. The system includes university
                                    verification, AI-based image matching, QR code tracking, claim
                                    verification, anonymous communication, and real-time notifications to
                                    improve item recovery across multiple universities.
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 rounded-full bg-[#e8f5fc] text-primary text-xs font-semibold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="px-5 md:px-6 pb-6">
                                <div className="overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src="/Pics/fyp_image.png"
                                        alt="Smart Multi-University Item Recovery System"
                                        className="w-full max-h-[380px] object-cover object-top transition-transform duration-500 ease-in-out hover:scale-105"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
                                    {infoCards.map((card, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#f4fafd] rounded-lg p-4 shadow-sm border border-gray-100"
                                        >
                                            <h4 className="text-primary font-bold text-sm">
                                                {card.title}
                                            </h4>

                                            <p className="mt-2 text-gray-800 font-semibold text-sm">
                                                {card.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;