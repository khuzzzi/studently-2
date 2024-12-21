import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios"; // Import Axios

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  postTitle: z.string().min(2, {
    message: "Post title must be at least 2 characters.",
  }),
  postContent: z.string().max(200, {
    message: "Post limit reached!",
  }),
  media: z
    .any()
    .refine((files) => {
      if (!files || files.length === 0) return false; // Ensure at least one file is uploaded
      return Array.from(files).every((file) => {
        const isImage = ["image/jpeg", "image/png", "image/jpg"].includes(file.type);
        const isVideo = ["video/mp4", "video/mov", "video/webm"].includes(file.type);
        return (isImage || isVideo) && file.size <= 10 * 1024 * 1024; // Max 10MB
      });
    }, {
      message: "Only JPEG, JPG, PNG images and MP4, MOV, WEBM videos are allowed (Max: 10MB)",
    }),
});

export function CreatePostForm({setToggleCreatePost}) {
  const [mediaFiles, setMediaFiles] = useState([]);
  console.log(mediaFiles);
  
  const mediaHandling = (e, field) => {
    const files = Array.from(e.target.files);  // Convert FileList to an array
    setMediaFiles((prevFiles) => [...prevFiles, ...files]); // Append new files to the existing ones
    field.onChange(e.target.files); // This keeps react-hook-form's state updated with the selected files
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postTitle: "",
      postContent: "",
      media: null,
    },
  });

  // Handle form submission
  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("postTitle", values.postTitle);
    formData.append("postContent", values.postContent);

    Array.from(values.media).forEach((file) => {
      formData.append("media", file); // Append each file (image/video)
    });

    try {
      const response = await axios.post(
        "https://studently-1ldk.vercel.app/api/v1/posts/createPost",
        formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if(response.data.success === true){
        setToggleCreatePost(false)
      }
      alert("Post created successfully!");
    } catch (error) {
      console.log(error)
      alert("Failed to create post.");
    }
  };

  return (
    <Form {...form}>
      <div className="mt-4">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

          {/* Post Title */}
          <FormField
            control={form.control}
            name="postTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Title</FormLabel>
                <FormControl>
                  <Input placeholder="Post title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Post Content */}
          <FormField
            control={form.control}
            name="postContent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Content</FormLabel>
                <FormControl>
                  <Input placeholder="Post content" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Media Upload (Images and Videos) */}
          <FormField
            control={form.control}
            name="media"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Media</FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={(e) => mediaHandling(e, field)}
                  />
                </FormControl>
                <FormDescription>
                  Upload JPEG, JPG, PNG images or MP4, MOV, WEBM videos (Max: 10MB).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Media Preview */}
          <div className="mediaPreview w-full h-[30vh] aspect-square bg-gray-100">
            {Array.from(mediaFiles).map((file, index) => {
              const fileUrl = URL.createObjectURL(file);

              if (file.type.startsWith("image")) {
                return (
                  <div key={index} className="w-full h-full aspect-square">
                    <img src={fileUrl} alt={`media-${index}`} className="w-full h-full object-contain" />
                  </div>
                );
              } else if (file.type.startsWith("video")) {
                return (
                  <div key={index} className="w-full h-full aspect-square">
                    <video controls className="w-full h-full object-contain bg-gray-200">
                      <source src={fileUrl} type={file.type} />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              }
            })}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Form>
  );
}
