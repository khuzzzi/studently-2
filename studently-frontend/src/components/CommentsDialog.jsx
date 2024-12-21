import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";

// Mock comments data
const mockComments = [
  { id: 1, user: "Alice", avatar: "/placeholder.svg?height=40&width=40", content: "Great post! I really enjoyed reading this.", timestamp: "2 hours ago" },
  { id: 2, user: "Bob", avatar: "/placeholder.svg?height=40&width=40", content: "I have a question about the third point you made. Can you elaborate?", timestamp: "1 hour ago" },
  { id: 3, user: "Charlie", avatar: "/placeholder.svg?height=40&width=40", content: "This is exactly what I needed to read today. Thanks for sharing!", timestamp: "30 minutes ago" },
];

const CommentsDialog = ({ isOpen, setIsOpen, selectedPostId }) => {
    const [comments,setComments] = useState([])
    const [username , setUsername] = useState("")
    

useEffect(() => {
  const getPostComments = async () => {
    try {
      const response = await axios.get(
        `https://studently-1ldk.vercel.app/api/v1/posts/getPostComments/${selectedPostId}`,
        { withCredentials: true }
      );

      // Set comments data
      setComments(response.data.comments);

      // Extract the username from the first comment (if exists)
      if (response.data.comments.length > 0) {
        const usernames = response.data.comments.map((comment) => comment.user.username);
        setUsername(usernames.join(" ")); // Or handle usernames as needed
      } else {
        setUsername("No usernames available");
      }
    } catch (error) {
      console.error("Error fetching post comments:", error);
    }
  };

  getPostComments();
}, [selectedPostId]);

    
    return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Comments</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        
          {comments.map((comment,index) => (
            <div key={comment.id} className="flex space-x-4 p-4 bg-gray-50 rounded-lg">
              <Avatar>
                <AvatarImage src={comment.avatar || "https://github.com/shadcn.png"} alt={comment.user} />
                <AvatarFallback>{comment.user[index]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{username}</h3>
                  <span className="text-sm text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="mt-1 text-gray-700">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentsDialog;
