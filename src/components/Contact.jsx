'use client'

import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Title from "./Title";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setError("⚠️ Please fill in all fields before sending.");
            setTimeout(() => setError(""), 1000);
            return;
        }

        emailjs.send(
            "mstrhammad0321",
            "mstrhammad_",
            {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: "mstrhammad0321@gmail.com",
            },
            "r2XUavcoSmTzISykv"
        )
            .then(() => {
                alert("✅ Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setError("❌ Failed to send message. Try again.");
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div
                className="flex-grow mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 mt-8 sm:mt-12"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <Title>Contact</Title>
                <p className="mt-4 text-base sm:text-lg text-gray-700">
                    Feel free to reach out! We’d love to hear from you.
                </p>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 sm:mt-12">

                    <div className="bg-white shadow-xl p-6 rounded-lg">
                        <ContactInfo
                            icon={<CiLocationOn className="size-6 text-primary" />}
                            title="Address"
                            details="House No 1500, Street No 16, Allama Iqbal Colony, RWP"
                        />
                        <ContactInfo
                            icon={<IoCallOutline className="size-6 text-primary" />}
                            title="Call Us"
                            details="+92 3425122560"
                        />
                        <ContactInfo
                            icon={<MdEmail className="size-6 text-primary" />}
                            title="Email Us"
                            details="mstrhammad0321@gmail.com"
                        />


                        <div className="w-full h-48 sm:h-60 mt-6 border border-gray-300 rounded-lg overflow-hidden">
                            <img
                                src="/Pics/Map.jpg"
                                alt="Location Map"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    <div className="bg-white shadow-xl p-6 rounded-lg">
                        {error && <p className="text-red-500 mb-3">{error}</p>}

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} />
                                <InputField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <InputField label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                            <TextareaField label="Message" name="message" value={formData.message} onChange={handleChange} />

                            <button
                                type="submit"
                                className="bg-primary text-white hover:bg-sky-400 w-full py-3 rounded-lg mt-4 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            <footer className="bg-[#f4fafd] text-black py-6 w-full text-center mt-auto">
                <p className="text-sm">© Copyright <span className="font-bold">iPortfolio</span> All Rights Reserved</p>
                <p className="text-xs mt-1">Designed by <span className="text-primary">Mstr Hammad</span></p>
            </footer>
        </div>
    );
};


const ContactInfo = ({ icon, title, details }) => (
    <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#92b6d8] w-10 h-10 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h1 className="font-bold text-sm sm:text-base">{title}</h1>
            <p className="text-xs sm:text-sm">{details}</p>
        </div>
    </div>
);


const InputField = ({ label, name, type = "text", value, onChange }) => (
    <div>
        <h1 className="text-sm sm:text-base">{label}</h1>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="border w-full h-10 pl-3 focus:border-primary outline-none rounded-md mt-2 text-sm sm:text-base"
        />
    </div>
);


const TextareaField = ({ label, name, value, onChange }) => (
    <div className="mt-4">
        <h1 className="text-sm sm:text-base">{label}</h1>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            rows="5"
            className="border w-full p-3 focus:border-primary outline-none rounded-md mt-2 text-sm sm:text-base"
        />
    </div>
);

export default Contact;