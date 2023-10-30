"use client";
import { absoluteUrl } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const useArchive = (email: any) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        absoluteUrl(` /api/getpost?email=${email}`),
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [email]);
  return posts;
};

export default useArchive;
