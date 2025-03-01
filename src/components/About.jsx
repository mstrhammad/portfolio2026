import { FaGreaterThan } from "react-icons/fa";
import { userInfo } from '../constants/constants'
import Title from "./Title";




const About = () => {
    return (
        <>

            <div className=" min-h-screen  mx-36 mt-12 ">

                <div className="">
                    <Title >
                        About
                    </Title>

                    <p class="mt-4 text-lg text-gray-700">
                        I am a Full-Stack Developer & UX/UI Designer | Creating Seamless Digital Experiences | JavaScript, React, Next.js Expert.
                    </p>
                </div>
                <div className="flex mt-12">

                    <div>
                        <img src="/Pics/profileimage.jpeg" className="w-80 mt-2  " alt="" />
                    </div>

                    <div className="ml-6 ">
                        <h1 className="font-bold text-xl">UI/UX Designer & Web Developer.</h1>
                        <h1 className="mt-6">I am expert in my all services!</h1>

                        <div className="grid grid-flow-col grid-rows-4  gap-x-40 ">
                            <div className=" mt-6 flex items-center gap-2">
                                <FaGreaterThan className="text-primary" />
                                <h1 className="font-bold">Birthday: </h1>
                                <h1 >{userInfo.birthday}</h1>
                            </div>
                            <div className=" mt-6 flex items-center gap-2">
                                <FaGreaterThan className="text-primary" />
                                <h1 className="font-bold">Email: </h1>
                                <h1 >{userInfo.email}</h1>
                            </div>
                            <div className=" mt-6 flex items-center gap-2">
                                <FaGreaterThan className="text-primary" />
                                <h1 className="font-bold">Phone: </h1>
                                <h1 >{userInfo.phone}</h1>
                            </div>
                            <div className=" mt-6 flex items-center gap-2">
                                <FaGreaterThan className="text-primary" />
                                <h1 className="font-bold">City: </h1>
                                <h1 >{userInfo.city}</h1>
                            </div>


                            <div className=" mt-6 flex items-center gap-2">
                                <FaGreaterThan className="text-primary" />
                                <h1 className="font-bold">Age: </h1>
                                <h1 >{userInfo.age}</h1>
                            </div>
                            <div className=" mt-6 flex items-center gap-2">
                                <FaGreaterThan className="text-primary" />
                                <h1 className="font-bold">Degree: </h1>
                                <h1 >{userInfo.degree}</h1>
                            </div>
                            <div className=" mt-6 flex items-center gap-2">
                                <FaGreaterThan className="text-primary" />
                                <h1 className="font-bold">Freelance: </h1>
                                <h1 >{userInfo.freelance}</h1>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-[#f4fafd]  -mx-[144px] h-80 mt-8">
                    <div className="mx-36 pt-2">

                        <Title> Skills</Title>
                        <div>
                            <p className="mt-4">His needs result from something, an escape, indeed, with sincerity and in accordance with his nature.</p>
                        </div>


                        <div className="grid grid-flow-col grid-rows-3   ">
                            <div className="w-96">
                                <div className="flex justify-between mb-1 mt-6  ">
                                    <span className="text-sm font-bold text-primary ">HTML</span>
                                    <span className="text-sm font-medium text-primary ">95%</span>
                                </div>
                                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "   95%" }}></div>
                                </div>
                            </div>
                            <div className="w-96">
                                <div className="flex justify-between mb-1 mt-8  ">
                                    <span className="text-sm font-bold text-primary ">CSS</span>
                                    <span className="text-sm font-medium text-primary ">90%</span>
                                </div>
                                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "   90%" }}></div>
                                </div>
                            </div>
                            <div className="w-96">
                                <div className="flex justify-between mb-1 mt-8  ">
                                    <span className="text-sm font-bold text-primary ">JAVASCRIPT</span>
                                    <span className="text-sm font-medium text-primary ">75%</span>
                                </div>
                                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "   75%" }}></div>
                                </div>
                            </div>
                            <div className="w-96">
                                <div className="flex justify-between mb-1 mt-8  ">
                                    <span className="text-sm font-bold text-primary "> REACT</span>
                                    <span className="text-sm font-medium text-primary ">70%</span>
                                </div>
                                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "   70%" }}></div>
                                </div>
                            </div>
                            <div className="w-96">
                                <div className="flex justify-between mb-1 mt-8  ">
                                    <span className="text-sm font-bold text-primary ">UI/UX</span>
                                    <span className="text-sm font-medium text-primary ">85%</span>
                                </div>
                                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "   85%" }}></div>
                                </div>
                            </div>
                            <div className="w-96">
                                <div className="flex justify-between mb-1 mt-8  ">
                                    <span className="text-sm font-bold text-primary ">FIGMA</span>
                                    <span className="text-sm font-medium text-primary ">90%</span>
                                </div>
                                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "   90%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>


    )
}

export default About;