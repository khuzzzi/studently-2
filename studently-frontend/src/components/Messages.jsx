import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import Navbar from './Navbar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MessagesExchanges from './MessagesExchanges';

function Button({ children, className, variant }) {
    const baseClass = "px-4 py-2 rounded-xl font-medium";
    const variantClass = variant === "ghost" ? "bg-transparent hover:bg-white/10" : "bg-[#0a0a1f] hover:bg-[#0a0a1f]/90";
    return (
        <button className={`${baseClass} ${variantClass} ${className}`}>
            {children}
        </button>
    );
}

function Card({ children, className }) {
    return (
        <div className={`bg-[#f5f5e9] rounded-3xl ${className}`}>
            {children}
        </div>
    );
}

export default function Messages() {

    const [isUserSelected , setIsUserSelected] = useState(true)

    return (
        <div className="min-h-screen bg-[#0a0a1f] text-white">
            <div className="container mx-auto p-4">
                <Navbar />


                <div className="grid grid-cols-1 md:grid-cols-[350px,1fr] gap-4 mt-5">
                    <Card className="p-4">
                        <div className="flex items-center justify-between mb-6 w-full h-32 bg-[#050A24] rounded-2xl">
                            <div className="flex flex-col font-Geologica text-2xl ml-5 font-bold">
                                <h2>Message Your</h2>
                                <h2>Favourite Buddy</h2>
                            </div>
                            <MessageSquare className=" text-white mr-4 " />
                        </div>

                        <div className="space-y-2">
                            {[...Array(6)].map((_, i) => (
                                <Button
                                    key={i}
                                    className="w-full justify-start gap-3 text-white rounded-xl p-3"
                                >
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className="flex flex-col items-start text-2xl">
                                        <span className="font-medium">Kashan rashid</span>
                                        <span className="text-xs text-gray-400  font-Geologica italic">saw 18 minutes ago</span>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-8 flex items-center justify-center">
                        {
                            isUserSelected ? <MessagesExchanges/> : <p className="text-2xl font-bold text-gray-800">Messages Will Appear Here</p>


                        }
                    </Card>
                </div>
            </div>
        </div>
    );
}