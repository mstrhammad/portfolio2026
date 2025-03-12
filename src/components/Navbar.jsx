"use client";
import React, { useState, useEffect } from "react";
import { userInfo } from "../constants/constants";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { navbar_items } from "../constants/constants";
import { scroller } from "react-scroll";
import { Link as ScrollLink, Events } from "react-scroll";

const Navbar = ({ isOpen, setIsOpen }) => {
    const [active, setActive] = useState("intro");

    useEffect(() => {
        scroller.scrollTo("intro", {
            duration: 500,
            smooth: true,
        });

        Events.scrollEvent.register("begin", function (to) {
            setActive(to);
        });

        return () => {
            Events.scrollEvent.remove("begin");
        };
    }, []);

    const handleInsta = () => window.open("https://www.instagram.com/mstrhammad_/", "_blank");
    const handleFiver = () => window.open("https://www.fiverr.com/mstrhammad339/buying?source=avatar_menu_profile", "_blank");
    const handleLinkedin = () => window.open("https://www.linkedin.com/in/mstrhammad/", "_blank");
    const handleGit = () => window.open("https://github.com/mstrhammad44", "_blank");

    return (
        <>

            <div
                className={`fixed top-0 left-0 h-full bg-[#040b14] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } xl:translate-x-0 lg:w-64 xl:w-[15%] z-40`}
                style={{ position: isOpen ? "absolute" : "fixed" }}
            >
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="text-white">
                        <img
                            src={userInfo.picture}
                            alt="profile"
                            className="w-28 h-28 lg:w-24 lg:h-24 xl:w-36 xl:h-36 rounded-full mx-auto my-5 border-zinc-800 border-8 lg:border-4 xl:border-8"
                        />
                        <h1 className="text-2xl lg:text-lg font-bold text-center xl:text-2xl">
                            {userInfo.name}
                        </h1>
                    </div>
                    <div className="text-white cursor-pointer flex p-4 lg:p-2 space-x-3 lg:space-x-2 xl:p-4 xl:space-x-4 justify-center">
                        <FaInstagram
                            className="border-zinc-800 size-9 border-8 rounded-full hover:bg-primary hover:border-primary"
                            onClick={handleInsta}
                        />
                        <TbBrandFiverr
                            className="border-zinc-800 size-9 border-8 rounded-full hover:text-primary hover:border-primary"
                            onClick={handleFiver}
                        />
                        <FaLinkedin
                            className="border-zinc-800 size-9 border-8 rounded-full hover:text-primary hover:border-primary"
                            onClick={handleLinkedin}
                        />
                        <FaGithub
                            className="border-zinc-800 size-9 border-8 rounded-full hover:text-primary hover:border-primary"
                            onClick={handleGit}
                        />
                    </div>
                    <div style={{ color: "#a8a9b4" }} className="pl-1">
                        {navbar_items.map((item) => (
                            <div
                                key={item.id}
                                className={`flex items-center ml-8 mt-8 space-x-2 text-lg my-7 cursor-pointer ${active === item.id ? "text-primary" : "hover:text-primary"
                                    }`}
                            >
                                {item.icon}
                                <ScrollLink
                                    to={item.id}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    onSetActive={(to) => setActive(to)}
                                >
                                    {item.label}
                                </ScrollLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;