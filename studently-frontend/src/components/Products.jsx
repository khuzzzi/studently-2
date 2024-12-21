import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Products = () => {
    const products = Array(5).fill({
        title: "My Physics Notes",
        price: "14.05",
        avatar: "",
    });

    return (
        <>
            {products.map((product, index) => (
                <Card
                    key={index}
                    className="bg-[#0f1023] border-gray-800 max-sm:w-full w-[490px] h-auto" // Set a smaller width and auto height
                >
                    <CardContent className="p-0">
                        <div className="aspect-[4/3] relative bg-gray-800 rounded-t-lg" />
                        <div className="p-3 flex items-center gap-2">
                            <Avatar className="w-10 h-10"> {/* Reduce Avatar size */}
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div className="flex-1">
                                <h3 className="text-lg font-bold font-Geologica text-white">
                                    {product.title} {/* Reduce title font size */}
                                </h3>
                            </div>
                            <div className="text-lg font-medium text-white">${product.price}</div> {/* Adjust price font size */}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default Products;
