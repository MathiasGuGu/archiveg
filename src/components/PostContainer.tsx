"use client";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import usePosts from "@/hooks/usePosts";
import Skeleton from "react-loading-skeleton";
import { Ghost } from "lucide-react";

interface post {
  id: string;
  title: string;
  body: string;
  slug: string;
  userId: string;
}

const PostContainer = ({
  searchQuery = "",
  tagQuery = [],
  dateQuery,
  likeQuery = "",
}) => {
  const posts = usePosts();

  const filterData = (data) => {
    let post = data;
    if (searchQuery !== "") {
      post = data.filter((post) => {
        return post.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    } else if (tagQuery.length !== 0) {
      tagQuery?.map((tag) => {
        post = data?.filter((post) => {
          const tagsLowered = [];
          post.tags.map((tag) => {
            tagsLowered.push(tag.toLowerCase());
          });
          return tagsLowered.includes(tag.toLowerCase());
        });
      });
    }
    return post;
  };

  const showPosts = filterData(posts);

  return (
    <div className="mt-32 mb-32 flex flex-col gap-6 items-center min-h-[80vh] h-auto w-full  ">
      {showPosts?.length === 0 && (
        <div className="h-[80vh] flex flex-col gap-3 items-center justify-center">
          <Ghost size={64} strokeWidth={1} color="rgb(29 78 216)"></Ghost>
          <p className="  text-sm">This place looks pretty empty...</p>
          <p className="text-sm">Be the first to post!</p>
        </div>
      )}
      {showPosts?.map((post: post, index) => {
        return <Post post={post} key={index} />;
      })}
    </div>
  );
};

export default PostContainer;
