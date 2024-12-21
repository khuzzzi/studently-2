import React, { useState } from "react";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
    FaSkype,
    FaChevronDown,
} from "react-icons/fa";
import Navbar from "./Navbar";
import Products from "./Products";
import Posts from "./Posts";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function ProfileSection() {
    const [profilePic, setProfilePic] = useState("https://example.com/your-profile-pic.jpg"); // Placeholder profile picture

    const hideScrollbar = {
        overflowY: "auto",
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
    };

    const hideScrollbarWebkit = {
        ...hideScrollbar,
        "::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari, and Opera
    };

    return (
        <div className="bg-[#0a0f2c] min-h-screen font-Geologica">
            {/* Navigation */}
            <Navbar />

            {/* Profile Section */}
            <div className="relative px-8 pt-8 pb-32">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Profile Picture */}
                    <Avatar className="w-[180px] h-[180px]">
                        <AvatarImage className="bg-[#c3f137]" src={profilePic} />
                    </Avatar>

                    {/* Bio and Name */}
                    <div className="flex-1 md:pt-12 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-white mb-4">John Doe</h1> {/* Replace with static or dynamic name */}
                        <div className="flex gap-2 justify-center md:justify-start mb-4">
                            <SocialButton Icon={FaFacebook} color="#1877F2" />
                            <SocialButton Icon={FaInstagram} color="#E4405F" />
                            <SocialButton Icon={FaTwitter} color="#1DA1F2" />
                            <SocialButton Icon={FaWhatsapp} color="#25D366" />
                            <SocialButton Icon={FaSkype} color="#00AFF0" />
                        </div>
                        <p className="text-lg text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet
                            veritatis deleniti?
                        </p>
                    </div>

                    {/* Box on the right side */}
                    <div className="bg-[#F3F3E0] w-[30vw] max-sm:w-full max-sm:mr-0 h-[30vh] flex items-center justify-center text-[#050A24] text-3xl rounded shadow-md mr-3">
                        Something Crazy Is Cookin!!!
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div
                className="w-full ml-8 max-sm:ml-0"
                style={{ height: "calc(100vh - 120px)" }}
            >
                <div className="grid grid-cols-[500px,1fr] max-sm:grid-cols-1 max-sm:grid-rows-[70vh,100vh] gap-4 overflow-hidden">
                    {/* Right Content - Products */}
                    <div
                        className="right p-4 order-first overflow-hidden"
                        style={hideScrollbarWebkit}
                    >
                        <div
                            className="overflow-y-auto max-h-[calc(100vh-200px)] max-sm:max-h-full"
                            style={hideScrollbarWebkit}
                        >
                            <Products />
                            <Products />
                            <Products />
                        </div>
                    </div>

                    {/* Left Content - Posts */}
                    <div
                        className="left p-4 overflow-hidden sm:w-[80%] max-sm:bg-[#0a0f2c]"
                        style={hideScrollbarWebkit}
                    >
                        <div
                            className="overflow-y-auto max-h-[calc(100vh-200px)] max-sm:max-h-full"
                            style={hideScrollbarWebkit}
                        >
                            <Posts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SocialButton = ({ Icon, color }) => (
    <button
        className="rounded-full p-2 transition-transform hover:scale-110"
        style={{ backgroundColor: color }}
    >
        <Icon className="h-4 w-4 text-white" />
    </button>
);
