'use client';

import { IoMenu } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";
import Navbar from "./Navbar";

const Intro = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [text] = useTypewriter({
        words: ["veloper", "signer"],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 100,
    });

    return (
        <div className="w-full h-screen overflow-hidden relative">
            <img
                src='/Pics/main_cover.jpg'
                alt="cover"
                className="filter brightness-50 w-full h-full object-cover"
            />

            <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center">
                <div className="absolute top-8 right-8 lg:hidden">
                    <IoMenu
                        className="size-8 sm:size-10 text-white bg-primary rounded-full p-2 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>

                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

                <div
                    className="text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-sans text-white">
                        Muhammad Hammad
                    </h1>

                    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl mt-2 sm:mt-4 text-white flex gap-2 justify-center md:justify-start">
                        I'm
                        <span className="underline underline-offset-8 decoration-primary w-[150px] text-start">
                            {"De" + text}
                            <Cursor />
                        </span>
                    </h1>
                </div>

                <div
                    className="mt-6 sm:mt-8 md:mt-10 lg:mt-12"
                    data-aos="fade-up-left"
                    data-aos-duration="2000"
                >
                    <a
                        href="/Hammad_cv.pdf"
                        download="Hammad_cv.pdf"
                        className="flex items-center gap-2 bg-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-2xl text-sm sm:text-base md:text-lg text-white hover:bg-sky-400 transition-colors duration-300"
                    >
                        <SiReaddotcv className="size-4 sm:size-5" />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;