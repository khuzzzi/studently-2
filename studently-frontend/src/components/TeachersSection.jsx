import React from 'react'
import Navbar from "./Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


const TeachersSection = () => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar />

            {/* Main Content Section */}
            <div className="flex-grow bg-[#050A24] font-Geologica overflow-y-auto p-5 ">
                <h1 className="text-6xl text-white font-bold my-10">Find The Best Teacher In Town.</h1>

                {/* Grid of Cards */}
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(30vw,_1fr))] gap-4 max-sm:grid-cols-1">
                    <div className="min-h-[55vh] bg-[#F3F3E0] rounded-lg flex flex-col ">
                        <div className="upper flex items-center p-3 gap-6 ml-3 ">
                            <div className="left ">
                                <Avatar className="min-w-[10vw] min-h-[20vh] max-sm:min-w-[30vw]">
                                    <AvatarImage src="https://github.com/shadcn.png" className="max-sm:object-cover " />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="right flex flex-col text-5xl font-Geologica font-extrabold">
                                <h1>Kashan</h1>
                                <h1>Rashid.</h1>
                            </div>
                        </div>
                        <div className="lower font-Geologica font-medium ml-3 px-3">
                            <p>I am a skilled physics teacher teaching at various
                                institutes of Karachi.
                                    <br /> <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer nec odio. Praesent libero. Sed cursus ante
                                diam. Sed nisi. Nulla quis sem at nibh elementum
                                imperdiet.</p>
                        </div>
                        <button className='bg-[#050A24] w-[50%] h-[6vh] mt-3 ml-5 rounded-lg text-[#F3F3E0] font-Geologica max-sm:mb-3' >View More Details</button>
                    </div>
                    <div className="min-h-[55vh] bg-[#F3F3E0] rounded-lg flex flex-col ">
                        <div className="upper flex items-center p-3 gap-6 ml-3 ">
                            <div className="left ">
                                <Avatar className="min-w-[10vw] min-h-[20vh] max-sm:min-w-[30vw]">
                                    <AvatarImage src="https://github.com/shadcn.png" className="max-sm:object-cover " />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="right flex flex-col text-5xl font-Geologica font-extrabold">
                                <h1>Kashan</h1>
                                <h1>Rashid.</h1>
                            </div>
                        </div>
                        <div className="lower font-Geologica font-medium ml-3 px-3">
                            <p>I am a skilled physics teacher teaching at various
                                institutes of Karachi.
                                    <br /> <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer nec odio. Praesent libero. Sed cursus ante
                                diam. Sed nisi. Nulla quis sem at nibh elementum
                                imperdiet.</p>
                        </div>
                        <button className='bg-[#050A24] w-[50%] h-[6vh] mt-3 ml-5 rounded-lg text-[#F3F3E0] font-Geologica max-sm:mb-3' >View More Details</button>
                    </div>
                    <div className="min-h-[55vh] bg-[#F3F3E0] rounded-lg flex flex-col ">
                        <div className="upper flex items-center p-3 gap-6 ml-3 ">
                            <div className="left ">
                                <Avatar className="min-w-[10vw] min-h-[20vh] max-sm:min-w-[30vw]">
                                    <AvatarImage src="https://github.com/shadcn.png" className="max-sm:object-cover " />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="right flex flex-col text-5xl font-Geologica font-extrabold">
                                <h1>Kashan</h1>
                                <h1>Rashid.</h1>
                            </div>
                        </div>
                        <div className="lower font-Geologica font-medium ml-3 px-3">
                            <p>I am a skilled physics teacher teaching at various
                                institutes of Karachi.
                                    <br /> <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer nec odio. Praesent libero. Sed cursus ante
                                diam. Sed nisi. Nulla quis sem at nibh elementum
                                imperdiet.</p>
                        </div>
                        <button className='bg-[#050A24] w-[50%] h-[6vh] mt-3 ml-5 rounded-lg text-[#F3F3E0] font-Geologica max-sm:mb-3' >View More Details</button>
                    </div>
                    <div className="min-h-[55vh] bg-[#F3F3E0] rounded-lg flex flex-col ">
                        <div className="upper flex items-center p-3 gap-6 ml-3 ">
                            <div className="left ">
                                <Avatar className="min-w-[10vw] min-h-[20vh] max-sm:min-w-[30vw]">
                                    <AvatarImage src="https://github.com/shadcn.png" className="max-sm:object-cover " />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="right flex flex-col text-5xl font-Geologica font-extrabold">
                                <h1>Kashan</h1>
                                <h1>Rashid.</h1>
                            </div>
                        </div>
                        <div className="lower font-Geologica font-medium ml-3 px-3">
                            <p>I am a skilled physics teacher teaching at various
                                institutes of Karachi.
                                    <br /> <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer nec odio. Praesent libero. Sed cursus ante
                                diam. Sed nisi. Nulla quis sem at nibh elementum
                                imperdiet.</p>
                        </div>
                        <button className='bg-[#050A24] w-[50%] h-[6vh] mt-3 ml-5 rounded-lg text-[#F3F3E0] font-Geologica max-sm:mb-3' >View More Details</button>
                    </div>
                    <div className="min-h-[55vh] bg-[#F3F3E0] rounded-lg flex flex-col ">
                        <div className="upper flex items-center p-3 gap-6 ml-3 ">
                            <div className="left ">
                                <Avatar className="min-w-[10vw] min-h-[20vh] max-sm:min-w-[30vw]">
                                    <AvatarImage src="https://github.com/shadcn.png" className="max-sm:object-cover " />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="right flex flex-col text-5xl font-Geologica font-extrabold">
                                <h1>Kashan</h1>
                                <h1>Rashid.</h1>
                            </div>
                        </div>
                        <div className="lower font-Geologica font-medium ml-3 px-3">
                            <p>I am a skilled physics teacher teaching at various
                                institutes of Karachi.
                                    <br /> <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer nec odio. Praesent libero. Sed cursus ante
                                diam. Sed nisi. Nulla quis sem at nibh elementum
                                imperdiet.</p>
                        </div>
                        <button className='bg-[#050A24] w-[50%] h-[6vh] mt-3 ml-5 rounded-lg text-[#F3F3E0] font-Geologica max-sm:mb-3' >View More Details</button>
                    </div>
                    <div className="min-h-[55vh] bg-[#F3F3E0] rounded-lg flex flex-col ">
                        <div className="upper flex items-center p-3 gap-6 ml-3 ">
                            <div className="left ">
                                <Avatar className="min-w-[10vw] min-h-[20vh] max-sm:min-w-[30vw]">
                                    <AvatarImage src="https://github.com/shadcn.png" className="max-sm:object-cover " />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="right flex flex-col text-5xl font-Geologica font-extrabold">
                                <h1>Kashan</h1>
                                <h1>Rashid.</h1>
                            </div>
                        </div>
                        <div className="lower font-Geologica font-medium ml-3 px-3">
                            <p>I am a skilled physics teacher teaching at various
                                institutes of Karachi.
                                    <br /> <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer nec odio. Praesent libero. Sed cursus ante
                                diam. Sed nisi. Nulla quis sem at nibh elementum
                                imperdiet.</p>
                        </div>
                        <button className='bg-[#050A24] w-[50%] h-[6vh] mt-3 ml-5 rounded-lg text-[#F3F3E0] font-Geologica max-sm:mb-3' >View More Details</button>
                    </div>







                    {/* More cards can be added dynamically */}
                </div>
            </div>
        </div>
    )
}

export default TeachersSection



