import { FaGreaterThan } from "react-icons/fa";
import { userInfo } from '../constants/constants';
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

import Title from "./Title";

const Contact = () => {
    return (
        <>
            <div className="min-h-[95vh]  mx-36 mt-9">
                <div>
                    <Title>Contact</Title>

                </div>


                <div>


                    <div>
                        <p className="mt-4  text-gray-700">
                            It is necessary for him to achieve something and escape, indeed, while staying true to himself.
                        </p>
                    </div>
                    <div className=" grid grid-cols-2 mt-12 ">
                        <div className=" bg-white  shadow-xl w-[60vh]   ">
                            <div className="p-7 ">
                                <div className="flex">

                                    <div className=" bg-[#92b6d8] w-10 h-10 rounded-full flex items-center justify-center ">
                                        <CiLocationOn className="size-6 text-primary   circle " />
                                    </div>
                                    <div className="ml-2  ">
                                        <h1 className=" font-bold">Address</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className="ml-12 text-sm -mt-4">House No 1500, Street No 16,Allama Iqbal Colony, RWP</p>
                                </div>
                            </div>
                            <div className="p-7 ">
                                <div className="flex">

                                    <div className=" bg-[#92b6d8] w-10 h-10 rounded-full flex items-center justify-center ">
                                        <IoCallOutline className="size-6 text-primary   circle " />
                                    </div>
                                    <div className="ml-2  ">
                                        <h1 className=" font-bold">Call US</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className="ml-12 text-sm -mt-4">+92 3425122560</p>
                                </div>
                            </div>
                            <div className="p-7 ">
                                <div className="flex">

                                    <div className=" bg-[#92b6d8] w-10 h-10 rounded-full flex items-center justify-center ">
                                        <MdEmail className="size-6 text-primary   circle " />
                                    </div>
                                    <div className="ml-2  ">
                                        <h1 className=" font-bold">Email Us</h1>
                                    </div>
                                </div>
                                <div>
                                    <p className="ml-12 text-sm -mt-4">mstrhammad0321@gmail.com</p>
                                </div>

                                <div class="w-90 h-60 mt-10 border border-gray-300 rounded">
                                    <img
                                        src="/Pics/Map.jpg"
                                        alt="Map showing Times Square"
                                        class="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" bg-white  shadow-xl  w-[80vh] -ml-16  ">

                            <div className="p-7 flex gap-6 ">
                                <div>
                                    <h1>
                                        Your Name
                                    </h1>
                                    <div className="mt-2" >

                                        <input type="text" className="border  w-72 h-9 " />
                                    </div>
                                </div>
                                <div>
                                    <h1>
                                        Your Email
                                    </h1>
                                    <div className="mt-2" >

                                        <input type="text" className="border  w-80 h-9" />
                                    </div>
                                </div>
                            </div>
                            <div className="ml-7">
                                <h1>
                                    Subject
                                </h1>
                                <div className="mt-2" >

                                    <input type="text" className="border  w-[73.5vh] h-9" />
                                </div>
                            </div>
                            <div className="ml-7 mt-6">
                                <h1>
                                    Message
                                </h1>
                                <div className="mt-2" >

                                    <textarea id="message" name="message" rows="5" cols="50" className="border w-[73.5vh] h-[25vh]"></textarea>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-4 text-white bg-primary w-40 ml-64 h-10 rounded-2xl ">
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>


                </div>



            </div>

        </>
    );
};

export default Contact;
