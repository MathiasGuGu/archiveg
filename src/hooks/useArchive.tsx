"use client";
import React, { useEffect, useState } from "react";

const useArchive = (email: any) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/getpost?email=${email}`,
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
