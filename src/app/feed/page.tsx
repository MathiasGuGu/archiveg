"use client";
import FeedFilter from "@/components/FeedFilter";
import PostContainer from "@/components/PostContainer";
import React, { useCallback, useState } from "react";

enum DATE {
  NEWEST = "newest",
  OLDEST = "oldest",
}

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateQuery, setDateQuery] = useState("new");
  const [likeQuery, setLikeQuery] = useState();
  const [tagQuery, setTagQuery] = useState([]);
  const [tagInput, setTagInput] = useState("");

  return (
    <div
      className="flex flex-col md:flex-row bg-[#f5f5f5]"
      style={{
        backgroundImage:
          " radial-gradient(#444cf750 0.9500000000000001px, #e5e5f750 0.9500000000000001px)",
        backgroundSize: "19px 19px",
      }}
    >
      <FeedFilter
        setSearchQuery={setSearchQuery}
        setDateQuery={setDateQuery}
        tagQuery={tagQuery}
        setTagQuery={setTagQuery}
        tagInput={tagInput}
        setTagInput={setTagInput}
      ></FeedFilter>
      <section className="flex-1 ml-0 px-3 md:px-0 md:ml-[25vw] h-auto   ">
        <PostContainer
          searchQuery={searchQuery}
          tagQuery={tagQuery}
          dateQuery={dateQuery}
        ></PostContainer>
      </section>
    </div>
  );
};

export default Page;
