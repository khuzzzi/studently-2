import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoMdLogOut, IoMdLogIn, IoMdCreate } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleLine, RiSettingsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState("https://github.com/shadcn.png");

    // Check for login status on page load
    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        setIsLogin(true);

        if (loggedIn) {
            setProfilePic("https://github.com/shadcn.png"); // Set profile image, replace with actual data
        }
    }, []); // Empty dependency array ensures this runs on page load only

    const handleSheetOpen = () => {
        setSheetOpen((prevState) => !prevState);
    };

    const handleLogout = ()=>{
        setIsLogin(false)
    }
   

    return (
        <div className="w-full h-16 text-white p-4 flex items-center justify-between cursor-pointer">
            <h1 className="text-5xl font-jersey" onClick={()=>navigate("/")}>Studently</h1>

            {/* Medium and small-sized screens */}
            <div className="sm:hidden">
                <GiHamburgerMenu className="text-3xl" onClick={handleSheetOpen} />
            </div>

            {/* Large screens */}
            <div className="flex gap-6 items-center max-sm:hidden max-md:hidden">
                {/* Navigation Items for Non-logged-in Users */}
                {!isLogin ? (
                    <>
                        <div className="item-grp flex gap-2 items-center">
                            <h3 className="text-[1.3vw] font-Geologica" onClick={() => navigate("/login")}>
                                Login
                            </h3>
                            <IoMdLogIn className="text-2xl" />
                        </div>
                        <div className="item-grp flex gap-2 items-center">
                            <h3 className="text-[1.3vw] font-Geologica" onClick={() => navigate("/signup")}>
                                Sign Up
                            </h3>
                            <IoMdCreate className="text-2xl" />
                        </div>
                    </>
                ) : (
                    // Navigation Items for Logged-in Users
                    <>
                        <div className="item-grp flex gap-2 items-center">
                            <h3 className="text-[1.3vw] font-Geologica" onClick={() => navigate("/messages")}>
                                Messages
                            </h3>
                            <IoIosArrowDown className="text-2xl" />
                        </div>
                        <div className="item-grp flex gap-2 items-center">
                            <h3 className="text-[1.3vw] font-Geologica" onClick={() => navigate("/teachers")}>
                                Find Teacher
                            </h3>
                            <IoIosArrowDown className="text-2xl" />
                        </div>
                        <div className="item-grp flex gap-2 items-center">
                            <h3 className="text-[1.3vw] font-Geologica" onClick={() => navigate("/sell")}>
                                Sell Stuff
                            </h3>
                            <IoIosArrowDown className="text-2xl" />
                        </div>
                    </>
                )}

                {/* Avatar and Profile Menu for Logged-in Users */}
                {isLogin && (
                    <Avatar onClick={handleSheetOpen} className="max-sm:hidden">
                        {sheetOpen && (
                            <Sheet open={sheetOpen} onOpenChange={setSheetOpen} className="overflow-auto">
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle className="font-Geologica font-bold">Profile Dashboard Menu</SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-col gap-3 font-Geologica mt-10 font-bold text-2xl cursor-pointer">
                                        <div
                                            className="item-grp flex justify-between hover:bg-gray-100 hover:p-2 hover:rounded-lg"
                                            onClick={() => navigate("/profile")}
                                        >
                                            <h3>My Profile</h3>
                                            <RiAccountCircleLine />
                                        </div>
                                        <div
                                            className="item-grp flex justify-between hover:bg-gray-100 hover:p-2 hover:rounded-lg"
                                        >
                                            <h3>Become A Teacher</h3>
                                            <IoMdCreate />
                                        </div>
                                        <div
                                            className="item-grp flex justify-between hover:bg-gray-100 hover:p-2 hover:rounded-lg"
                                            onClick={() => navigate("/messages")}
                                        >
                                            <h3>Messages</h3>
                                            <RiSettingsLine />
                                        </div>
                                        <div
                                            className="item-grp flex justify-between hover:bg-gray-100 hover:p-2 hover:rounded-lg"
                                        >
                                            <h3>Settings</h3>
                                            <RiSettingsLine />
                                        </div>
                                        <div
                                            className="item-grp flex justify-between hover:bg-gray-100 hover:p-2 hover:rounded-lg"
                                            onClick={handleLogout}
                                        >
                                            <h3>Logout</h3>
                                            <IoMdLogOut />
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        )}
                        <AvatarImage src={profilePic} alt="Profile Picture" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                )}
            </div>
        </div>
    );
};

export default Navbar;
