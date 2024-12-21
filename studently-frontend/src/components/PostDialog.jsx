import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from 'axios';

const PostDialog = ({ isOpen, setIsOpen, postId }) => {
    
    const [comment,setComment] = useState("")
    const handleCommentSubmit = async() => {
        console.log(comment)
        try {
            const response = await axios.post(`https://studently-2.onrender.com/api/v1/posts/commentPost/${postId}`
                ,{comment},{withCredentials:true})
              if(response.data.success === true){
                setIsOpen(false)
              }
        } catch (error) {
            console.log(error)
        }    
    }



  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Comment</DialogTitle>
          <DialogDescription>
            Write your comment below and submit it to the post.
          </DialogDescription>
        </DialogHeader>
        {/* Add your comment form or functionality here */}
        <textarea
          className="w-full border p-2 rounded-md"
          placeholder="Write your comment..."
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={() => handleCommentSubmit()}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default PostDialog;
