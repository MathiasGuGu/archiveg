"use client";
import FeedFilter from "@/components/FeedFilter";
import Navbar from "@/components/Navbar";
import PostContainer from "@/components/PostContainer";
import { ArrowDown, CalendarClock, Heart, List, Plus, X } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { toast } from "sonner";

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

  console.log(dateQuery);

  return (
    <div className="flex flex-col md:flex-row bg-[#f5f5f5]">
      {/* 
        FilterForm
          -> Filter by date
          -> Filter by tags 
          -> Filter by likes
          -> Filter by searchquery
        */}
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
