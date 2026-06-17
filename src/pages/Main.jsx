"use client";

import Intro from "../components/Intro";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main = () => {


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="">
                <section id="intro">
                    <Intro />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="resume">
                    <Resume />
                </section>
                <section id="portfolio">
                    <Portfolio />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </>
    );
};

export default Main;
