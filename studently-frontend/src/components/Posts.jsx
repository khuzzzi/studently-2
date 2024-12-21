import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import axios from 'axios';
import PostDialog from './PostDialog';
import { Badge } from "@/components/ui/badge";
import CommentsDialog from './CommentsDialog';

const Posts = () => {
  const allPosts = useSelector((state) => state.allPosts);
  const posts = allPosts.posts;
  const mediaFiles = posts.map((post) => post.media);

  const [likedPosts, setLikedPosts] = useState({});
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [commentCounts, setCommentCounts] = useState({});
  const [showPostsComments, setShowPostsComments] = useState(false);
  const [allData, setAllData] = useState(null);
  const [mediaTypes, setMediaTypes] = useState([]);

  const countComments = async (postId) => {
    try {
      const response = await axios.get(
        `https://studently-1ldk.vercel.app/api/v1/posts/getPostComments/${postId}`,
        { withCredentials: true }
      );
      setAllData(response);
      if (response.data.success) {
        setCommentCounts((prev) => ({
          ...prev,
          [postId]: response.data.totalComments,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentDialogOpen = async(postId) => {
    setSelectedPostId(postId)
    setShowPostsComments(true)
  }

  const checkMimeType = async (mediaUrl) => {
    try {
      const response = await fetch(mediaUrl, { method: 'HEAD' });
      const contentType = response.headers.get('Content-Type');

      if (contentType) {
        const mimeType = contentType.split(';')[0];
        return mimeType;
      } else {
        console.log('MIME type not found');
        return null;
      }
    } catch (error) {
      console.error('Error fetching media:', error);
      return null;
    }
  };

  useEffect(() => {
    const getMediaTypes = async () => {
      const types = await Promise.all(mediaFiles.map(async (mediaUrl) => {
        return await checkMimeType(mediaUrl);
      }));
      setMediaTypes(types);
    };

    if (mediaFiles.length > 0) {
      getMediaTypes();
    }
  }, [mediaFiles]);

  useEffect(() => {
    posts.forEach((post) => {
      countComments(post._id);
    });
  }, [posts]);

  const likePost = async (postId) => {
    try {
      const response = await axios.post(
        `https://studently-1ldk.vercel.app/api/v1/posts/likePost/${postId}`,
        {},
        { withCredentials: true }
      );
      if (response.data.success === true) {
        setLikedPosts((prev) => ({ ...prev, [postId]: true }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dislikePost = async (postId) => {
    try {
      const response = await axios.post(
        `https://studently-1ldk.vercel.app/api/v1/posts/dislikePost/${postId}`,
        {},
        { withCredentials: true }
      );
      if (response.data.success === true) {
        setLikedPosts((prev) => ({ ...prev, [postId]: false }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="posts-container space-y-4 w-full px-4 sm:px-6 lg:px-8">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Card
            key={post._id}
            className="w-full bg-[#0f1023] border-blue-500/20 p-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-3 max-w-6xl mx-auto">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={post.userAvatar || "/placeholder.svg"} alt={post.username} />
                  <AvatarFallback>{post.username?.slice(0, 2).toUpperCase() || "UN"}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold text-white">{post.username || "USERNAME"}</div>
                  <div className="text-xs text-gray-400">
                    {new Date(post.createdAt).toLocaleString() || "POSTED AT: Unknown"}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-300">{post.postTitle || "No Title Provided"}</div>
                <div className="text-sm text-gray-400">{post.postContent || "No Content Provided"}</div>
              </div>

              {post.media && mediaTypes[index] && (
                <div className="relative w-full pt-[56.25%] bg-gray-800 rounded-md overflow-hidden">
                  {mediaTypes[index] === 'video/mp4' ? (
                    <video 
                      controls 
                      className="absolute top-0 left-0 w-full h-full object-contain"
                    >
                      <source src={post.media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={post.media}
                      alt="Post visual"
                      className="absolute top-0 left-0 w-full h-full object-contain"
                    />
                  )}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-red-500 ${likedPosts[post._id] ? 'bg-red-500/10' : ''}`}
                  onClick={() => likedPosts[post._id] ? dislikePost(post._id) : likePost(post._id)}
                >
                  <Heart className={`h-4 w-4 mr-1 ${likedPosts[post._id] ? 'fill-current' : ''}`} />
                  {likedPosts[post._id] ? 'Liked' : 'Like'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-500"
                  onClick={() => {
                    setSelectedPostId(post._id);
                    setCommentDialogOpen(true);
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Comment
                </Button>
                <Badge
                  variant="outline"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600 cursor-pointer transition-all"
                  onClick={() => handleCommentDialogOpen(post._id)}
                >
                  {commentCounts[post._id] || 0} Comments
                </Badge>
                <Button variant="ghost" size="sm" className="text-green-500">
                  <Share className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div className="text-gray-400 text-center py-8">No posts available</div>
      )}

      <PostDialog
        isOpen={commentDialogOpen}
        setIsOpen={setCommentDialogOpen}
        postId={selectedPostId}
      />
      {showPostsComments && (
        <CommentsDialog 
          isOpen={showPostsComments} 
          setIsOpen={setShowPostsComments} 
          selectedPostId={selectedPostId} 
        />
      )}
    </div>
  );
};

export default Posts;

