import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from 'react-router-dom'

const DropDown = ({ open, children }) => {
    const navigate = useNavigate()
    return (
        <DropdownMenu className="">
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            {open && (
                <DropdownMenuContent className="mt-2 mr-3 bg-[#050A24] text-white">
                    <DropdownMenuLabel className="font-roboto text-xl">Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="bg-transparent cursor-pointer " onClick={()=>navigate("/dashboard")}>Switch To Seller Dashboard </DropdownMenuItem>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    )
}

export default DropDown
