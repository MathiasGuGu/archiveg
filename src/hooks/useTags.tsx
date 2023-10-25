"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState();
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/api/tags/getall`, {
      method: "GET",
    });
    const data = await response.json();
    setTags(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return tags;
};

export default useTags;
