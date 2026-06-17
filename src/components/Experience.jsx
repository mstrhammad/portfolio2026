'use client';

import React, { useState } from "react";
import {
    book_images,
    powerpoint_images,
    react_images,
    Image_images,
} from "@/constants/constants";
import Title from "./Title";

const Experience = () => {
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


            {/* Experience Section */}
            <div className="min-h-screen" data-aos="fade-up" data-aos-duration="1000">
                <div className="bg-[#f4fafd] py-10 flex flex-col items-center">
                    <div className="container mb-24">
                        <Title>Experience</Title>

                        <p className="mt-4 text-gray-700 text-left">
                            A focused showcase of my practical development experience, including
                            academic projects where I worked on real-world problem solving, mobile app
                            development, backend integration, and AI-based features.
                        </p>

                        <div className="mt-10 bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="p-6 md:p-8">
                                <p className="text-primary font-bold text-sm md:text-base">
                                    Final Year Project
                                </p>

                                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
                                    Smart Multi-University Item Recovery System
                                </h3>

                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    Smart Multi-University Item Recovery System is an AI-powered mobile
                                    application designed to help students, faculty, and university staff
                                    recover lost and found items efficiently. The system includes university
                                    verification, AI-based image matching, QR code tracking, claim
                                    verification, anonymous communication, and real-time notifications to
                                    improve item recovery across multiple universities.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 rounded-full bg-[#e8f5fc] text-primary text-sm font-semibold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="px-6 md:px-8 pb-8">
                                <div className="overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src="/Pics/fyp_image.png"
                                        alt="Smart Multi-University Item Recovery System"
                                        className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                    {infoCards.map((card, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#f4fafd] rounded-lg p-5 shadow-sm border border-gray-100"
                                        >
                                            <h4 className="text-primary font-bold text-sm">
                                                {card.title}
                                            </h4>
                                            <p className="mt-2 text-gray-800 font-semibold">
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

export default Experience;