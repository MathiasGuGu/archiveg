"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState();
  const searchParams = useSearchParams()!;
  const dateFilter = searchParams.get("sort");
  console.log(dateFilter);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/addpost?date=${dateFilter}&tagsQuery=react&likeQuery=up`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [dateFilter]);
  return posts;
};

export default usePosts;
