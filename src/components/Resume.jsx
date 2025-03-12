import { FaGreaterThan } from "react-icons/fa";
import { userInfo } from '../constants/constants';
import Title from "./Title";

const Resume = () => {
    return (
        <div className="flex flex-col min-h-screen mt-8 sm:mt-12 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36"
            data-aos="fade-up"
            data-aos-duration="1000"
        >

            <div>
                <Title>Resume</Title>
            </div>


            <p className="mt-4 text-base sm:text-lg text-gray-700">
                When creating an introduction for a resume, you want to highlight your professional background, skills, and what makes you a good fit for the position you're applying for.
            </p>


            <div className="mt-8 sm:mt-12">
                <h2 className="text-xl sm:text-2xl font-bold text-black">Summary</h2>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-6">

                    <div className="relative pl-0">
                        <div className="absolute -left-2.5 top-0.5  w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                        <div className="border-l-2 border-primary pl-4 pb-2">
                            <h3 className="text-lg sm:text-xl font-bold text-primary">Mstr Hammad</h3>
                            <p className="italic text-gray-600 mt-2">
                                Motivated and detail-oriented BSCS student with a strong background in computer operations, customer service, and technical support.
                                Skilled in handling customer queries, resolving issues efficiently, and ensuring a seamless digital experience.
                            </p>
                            <ul className="mt-2 space-y-1">
                                <li>Tench Bhatta, Rawalpindi</li>
                                <li>+92-3425122560</li>
                                <li>mstrhammad0321@gmail.com</li>
                            </ul>
                        </div>
                        <div className="mt-10 sm:mt-10 md:mt-12 lg:mt-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">Professional Experience</h2>
                            <div className="relative border-l-2 border-primary pl-4">

                                <div className="mb-6">
                                    <div className="absolute -left-3.5 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                    <h3 className="text-lg sm:text-xl font-bold text-primary">React Developer</h3>
                                    <p className="font-bold text-gray-600 mt-2">Feb 2024 - May 2024</p>
                                    <p className="italic text-gray-600 mt-2">NAVTTC Institute, Islamabad</p>
                                    <ul className="mt-2 space-y-1">
                                        <li>Built reusable UI components that can be used across multiple projects.</li>
                                        <li>Developed dynamic, responsive web interfaces using React.js.</li>
                                    </ul>
                                </div>


                                <div className="mb-6">

                                    <div className="absolute -left-3.5 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                    <div className="absolute -left-3 top-51  w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                    <h3 className="text-lg sm:text-xl font-bold text-primary">UI/UX DESIGNER</h3>
                                    <p className="font-bold text-gray-600 mt-2">Jun 2023 - Sep 2023</p>
                                    <p className="italic text-gray-600 mt-2">HAZAA Institute, Islamabad</p>
                                    <ul className="mt-2 space-y-1">
                                        <li>Essential Skills: User research, wireframing, prototyping, and visual design.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="lg:-mt-12 ">
                        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">Education</h2>
                        <div className="relative border-l-2 border-primary pl-4">

                            <div className="mb-8">
                                <div className="absolute -left-3 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                <h3 className="text-lg sm:text-xl font-bold text-primary">Bachelor of Science in Computer Science</h3>
                                <p className="font-bold text-gray-600 mt-2">Current - 5th Semester</p>
                                <p className="italic text-gray-600 mt-2">Szabist University, Islamabad</p>
                                <p className="mt-2">I have successfully earned my Bachelor of Science in Computer Science (BSCS), equipping me with strong problem-solving skills, programming expertise, and a deep understanding of software development.</p>
                            </div>


                            <div className="mb-8">
                                <div className="absolute -left-3 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                <div className="absolute -left-3 top-51  w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                <h3 className="text-lg sm:text-xl font-bold text-primary">FSC (PRE-MEDICAL)</h3>
                                <p className="font-bold text-gray-600 mt-2">2020 - 2022</p>
                                <p className="italic text-gray-600 mt-2">HARVARD COLLEGE, RWP</p>
                                <p className="mt-2">I have completed my F.Sc. Pre-Medical, where I gained a strong foundation in biology, chemistry, and physics. This program enhanced my analytical thinking, laboratory skills, and understanding of scientific concepts, preparing me for further studies in the field of science and technology.</p>
                            </div>


                            <div className="mb-8">
                                <div className="absolute -left-3 top-1 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                <div className="absolute -left-3 top-51  w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                                <h3 className="text-lg sm:text-xl font-bold text-primary">MATRIC (SCIENCE)</h3>
                                <p className="font-bold text-gray-600 mt-2">2018 - 2020</p>
                                <p className="italic text-gray-600 mt-2">F.G SIR SYED SCHOOL, RWP</p>
                                <p className="mt-2">I completed my Matriculation in Science, which provided me with essential knowledge in mathematics, physics, chemistry, and biology.</p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Resume;


