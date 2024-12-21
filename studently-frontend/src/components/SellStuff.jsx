import Navbar from "./Navbar"
import pic from "../public/modulus lecture 1.png"
import Products from "./Products"
export default function SellStuff() {
    const products = Array(5).fill({
        title: "My Physics Notes",
        price: "14.05",
        avatar: "",
    })

    return (
        <div className="min-h-screen bg-[#0a0b1a] text-white p-4 md:p-6 font-Geologica ">
            <Navbar />
            <div className="w-[92%] h-[50vh] rounded-xl bg-gray-50 ml-10 max-sm:ml-0 max-sm:w-full mt-2  aspect-video">
                <img src={pic} alt="" className="h-full w-full aspect-video"/>
                
            </div>
            <section className="mt-8 ml-[-5px]">
                <h2 className="font-bold mb-4 text-5xl">Notes & Stationary</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[30vw_30vw_30vw] gap-10" >
                   <Products/>
                </div>
            </section>
        </div>
    )
}