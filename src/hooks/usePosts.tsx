"use client";
import { absoluteUrl } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState();
  const searchParams = useSearchParams()!;
  const dateFilter = searchParams.get("sort");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        absoluteUrl(`/api/addpost?date=${dateFilter}`),
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
