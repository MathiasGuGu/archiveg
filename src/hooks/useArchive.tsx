"use client";
import React, { useEffect, useState } from "react";

const useArchive = (email) => {
  const [posts, setPosts] = useState();
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

  useEffect(() => {
    fetchData();
  }, []);
  return posts;
};

export default useArchive;
