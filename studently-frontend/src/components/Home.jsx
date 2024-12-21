import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Posts from "./Posts";
import { useState } from "react";
import CreatePost from "./CreatePost";

export default function Component() {
  const [toggleCreatePost , setToggleCreatePost] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0b1a] text-white font-Geologica overflow-hidden">
      {/* Navbar placeholder */}
      <Navbar />

      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="flex">
        {/* Sidebar */}
        <div
          className="w-64 border-r border-blue-500/20 p-4 h-[calc(100vh-3.5rem)] max-sm:hidden"
          style={{
            overflow: "hidden", // No scrollbars for the sidebar
          }}
        >
          <div className="h-48 bg-gray-800 rounded-lg mb-4" />
          <div className="h-48 bg-gray-800 rounded-lg mb-4" />
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full text-white bg-[#f4f4f4]/10 rounded-full flex items-center justify-center text-2xl" onClick={() => setToggleCreatePost((prevState) => !prevState)}>
              Post
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-white bg-[#f4f4f4]/10 hover:bg-blue-500/10"
            >
              About Studently
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-white bg-[#f4f4f4]/10 hover:bg-blue-500/10"
            >
              Contact Studently
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-white bg-[#f4f4f4]/10 hover:bg-blue-500/10"
            >
              Privacy Policy
            </Button>
          </div>
        </div>

        {
          toggleCreatePost && <CreatePost toggleCreatePost={toggleCreatePost} setToggleCreatePost={setToggleCreatePost}/>
        }
        <div
          className="flex-1 p-4 h-[calc(100vh-3.5rem)]"
          style={{
            overflowY: "auto", // Enables vertical scrolling
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            msOverflowStyle: "none", // Hides scrollbar in IE/Edge
          }}
        >
          <Posts/>
        </div>
      </div>
    </div>
  );
}
