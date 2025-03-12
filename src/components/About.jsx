import { FaGreaterThan } from "react-icons/fa";
import { userInfo2 } from '../constants/constants';
import Title from "./Title";

const About = () => {
    return (
        <div className="min-h-screen  mt-8 sm:mt-12">
            <div className="container">


                <diviv>
                    <Title>About</Title>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 sm:w-full ">
                        I am a Full-Stack Developer & UX/UI Designer | Creating Seamless Digital Experiences | JavaScript, React, Next.js Expert.
                    </p>
                </diviv>

                <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >

                    <div className="w-64 ">
                        <img
                            src="/Pics/profileimage.jpeg"
                            alt="Profile"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>


                    <div className="flex-1 mr-16">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">UI/UX Designer & Web Developer.</h1>
                        <p className="mt-2 text-gray-600">I am expert in my all services!</p>


                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {Object.entries(userInfo2).map(([key, value]) => (
                                <div key={key} className="flex items-center gap-2">
                                    <FaGreaterThan className="text-primary" />
                                    <span className="font-bold capitalize">{key}:</span>
                                    <span>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-12  py-8 sm:py-12 bg-[#f4fafd]"
                data-aos="fade-up-right"
                data-aos-duration="2000"
            >
                <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 relative z-20">
                    <Title>Skills</Title>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
                        His needs result from something, an escape, indeed, with sincerity and in accordance with his nature.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { skill: "HTML", percentage: "95%" },
                            { skill: "CSS", percentage: "90%" },
                            { skill: "JAVASCRIPT", percentage: "75%" },
                            { skill: "REACT", percentage: "70%" },
                            { skill: "UI/UX", percentage: "85%" },
                            { skill: "FIGMA", percentage: "90%" },
                        ].map((item, index) => (
                            <div key={index} className="w-full">
                                <div className="flex justify-between">
                                    <span className="text-sm sm:text-base font-bold text-primary">{item.skill}</span>
                                    <span className="text-sm sm:text-base font-medium text-primary">{item.percentage}</span>
                                </div>
                                <div className="bg-gray-200 rounded-full h-2.5 mt-2">
                                    <div
                                        className="bg-primary h-2.5 rounded-full"
                                        style={{ width: item.percentage }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;