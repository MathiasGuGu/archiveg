"use client";
import "react-loading-skeleton/dist/skeleton.css";

import React, { useEffect, useState } from "react";
import Post from "./Post";
import usePosts from "@/hooks/usePosts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Ghost } from "lucide-react";

interface post {
  id: string;
  title: string;
  body: string;
  slug: string;
  userId: string;
}

const PostContainer = ({ searchQuery = "", tagQuery = [] }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPosts, setShowPosts] = useState();
  const posts = usePosts();
  const filterData = (data: any) => {
    let post = data;
    if (searchQuery !== "") {
      // @ts-ignore: Unreachable code error

      post = data.filter((post) => {
        return post.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    } else if (tagQuery.length !== 0) {
      tagQuery?.map((tag: any) => {
        post = data?.filter((post: any) => {
          const tagsLowered: any[] = [];
          post.tags.map((tag: any) => {
            tagsLowered.push(tag.toLowerCase());
          });
          return tagsLowered.includes(tag.toLowerCase());
        });
      });
    }
    return post;
  };

  useEffect(() => {
    setIsLoading(true);
    setShowPosts(filterData(posts));
    setIsLoading(false);
  }, [posts]);

  return (
    <div className="mt-32 mb-32 flex flex-col gap-6 items-center min-h-[80vh] h-auto w-full  ">
      {showPosts && showPosts?.length === 0 && (
        <div className="h-[80vh] flex flex-col gap-3 items-center justify-center">
          <Ghost size={64} strokeWidth={1} color="rgb(29 78 216)"></Ghost>
          <p className="  text-sm">This place looks pretty empty...</p>
          <p className="text-sm">Be the first to post!</p>
        </div>
      )}
      {isLoading ? (
        <SkeletonTheme>
          <Skeleton count={1} width={800} height={200} />
        </SkeletonTheme>
      ) : (
        showPosts?.map((post: post, index: Number) => {
          // @ts-ignore: Unreachable code error
          return <Post post={post} key={index} />;
        })
      )}
    </div>
  );
};

export default PostContainer;
