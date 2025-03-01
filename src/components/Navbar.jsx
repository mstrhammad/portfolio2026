"use client";
import React, { useState } from "react";
import { userInfo } from "../constants/constants";
import { FaInstagram } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { PiReadCvLogo } from "react-icons/pi";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {


    const handleInsta = () => {
        window.open("https://www.instagram.com/mstrhammad_/", "_blank");
    };
    const handleFiver = () => {
        window.open(
            "https://www.fiverr.com/mstrhammad339/buying?source=avatar_menu_profile",
            "_blank"
        );
    };
    const handleLinkedin = () => {
        window.open("https://www.linkedin.com/in/mstrhammad/", "_blank");
    };
    const handleGit = () => {
        window.open("https://github.com/mstrhammad44", "_blank");
    };


    return (
        <>
            <div
                className="w-64 h-screen fixed top-0 left-0 flex flex-col  md:flex"
                style={{ backgroundColor: "#040b14" }}
            >
                <div className="text-white">
                    <img
                        src={userInfo.picture}
                        alt="profile"
                        className="w-28 h-28 rounded-full mx-auto my-5 border-zinc-800   border-8"
                    />
                    <h1 className="text-2xl font-bold text-center">{userInfo.name}</h1>
                </div>
                <div className=" text-white cursor-pointer  flex p-4 space-x-3 justify-center   ">
                    <FaInstagram
                        className=" border-zinc-800  size-9 border-8 rounded-full hover:bg-primary hover:border-primary"
                        onClick={handleInsta}
                    />
                    <TbBrandFiverr
                        className=" border-zinc-800  size-9 border-8 rounded-full hover:text-primary hover:border-primary"
                        onClick={handleFiver}
                    />
                    <FaLinkedin
                        className=" border-zinc-800  size-9 border-8 rounded-full hover:text-primary hover:border-primary"
                        onClick={handleLinkedin}
                    />
                    <FaGithub
                        className=" border-zinc-800  size-9 border-8 rounded-full hover:text-primary hover:border-primary"
                        onClick={handleGit}
                    />
                </div>
                <div style={{ color: "#a8a9b4" }} className="pl-2 ">
                    <div className="  flex ml-4 mt-5 space-x-2 text-base  my-7 hover:text-primary">
                        <IoHomeOutline className="mt-1 " />
                        <ScrollLink
                            to="intro"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"

                        >
                            Home
                        </ScrollLink>
                    </div>
                    <div className="  flex ml-4 mt-5 space-x-2 text-base  my-7 hover:text-primary ">
                        <IoPersonOutline className="mt-1 " />
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"

                        >
                            About
                        </ScrollLink>
                    </div>

                    <div className="  flex ml-4 mt-5 space-x-2 text-base   my-7 hover:text-primary">
                        <PiReadCvLogo className="mt-1 " />

                        <ScrollLink
                            to="resume"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Resume
                        </ScrollLink>
                    </div>
                    <div className=" flex ml-4 mt-5 space-x-2 text-base  my-7 hover:text-primary">
                        <LuGalleryVerticalEnd className="mt-1 " />
                        <ScrollLink
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Portfolio
                        </ScrollLink>
                    </div>
                    <div className=" flex ml-4 mt-5 space-x-2 text-base   my-7 hover:text-primary">
                        <IoMdContact className="mt-1  size-5" />
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                        >
                            Contact
                        </ScrollLink>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;
