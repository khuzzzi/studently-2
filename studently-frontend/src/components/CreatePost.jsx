import React from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CreatePostForm } from '../Forms/CreatePostForm';

const CreatePost = ({ toggleCreatePost, setToggleCreatePost }) => {
    
    return (
        <Dialog open={toggleCreatePost} onOpenChange={() => setToggleCreatePost(false)} className="max-sm:rounded-3xl">
            {/* Ensure DialogTrigger has a single child */}
            <DialogTrigger asChild>
                
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Post</DialogTitle>
                    <DialogDescription>
                        <CreatePostForm setToggleCreatePost={setToggleCreatePost}/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePost;
