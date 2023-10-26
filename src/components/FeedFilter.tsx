import useTags from "@/hooks/useTags";
import { cn } from "@/lib/utils";
import {
  ArrowDown,
  ArrowUp,
  CalendarClock,
  Filter,
  Heart,
  Plus,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const FeedFilter = ({
  setSearchQuery,
  setDateQuery,
  tagQuery,
  setTagQuery,
  tagInput,
  setTagInput,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const tags = useTags();
  const handleRemoveTag = (index, value) => {
    setTagQuery((prev) => {
      const newTags = prev.filter((tag) => {
        return tag !== value;
      });

      return newTags;
    });
  };

  const checkTagInQuery = (value) => {
    if (!tagQuery.includes(value)) {
      setTagQuery((prev) => [...prev, value]);
    } else {
      toast.error("You have already included that tag");
    }
  };

  const changeDateQuery = () => {
    setDateQuery((prev) => (prev === "old" ? "new" : "old"));
  };

  return (
    <aside
      className={cn({
        "flex mt-14 flex-col z-50 md:flex-col h-screen overflow-y-scroll px-6 pb-12  fixed left-0 top-0  ":
          true,
        "w-[350px] shadow bg-white": isFilterOpen,
        "w-16 md:w-32 md:bg-white": !isFilterOpen,
      })}
    >
      <div
        className="w-full px-2 py-2 hover:cursor-pointer bg-white hover:bg-zinc-300/30 h-auto flex items-center gap-3 justify-center"
        onClick={() => {
          setIsFilterOpen((prev) => !prev);
        }}
      >
        <Filter size={24} strokeWidth={1} /> {isFilterOpen && <h2>Filter</h2>}
        <p className=" sr-only">Filter Posts</p>
      </div>
      {isFilterOpen && (
        <form
          className={cn({
            "w-full h-auto flex flex-col bg-white  px-5 pt-4  md:pt-28 pb-12 gap-12":
              true,
          })}
        >
          <div className="w-full flex flex-col gap-2">
            <div className="text-xl text-zinc-700">Search for a post</div>
            <input
              onInput={(e) => {
                setSearchQuery(e.currentTarget.value);
              }}
              className=" border px-3 h-10 rounded placeholder:text-sm"
              placeholder="Writing an article on archive G"
            ></input>
          </div>
          {/* 
      <div className="flex gap-3">
        <div
          onClick={() => {
            changeDateQuery();
          }}
          className="px-3 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer flex gap-1"
        >
          <CalendarClock strokeWidth={1} />
          {dateQuery === "new" ? (
            <ArrowDown strokeWidth={1} />
          ) : (
            <ArrowUp strokeWidth={1}></ArrowUp>
          )}
        </div>
        <div className="px-3 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer flex gap-1">
          <Heart strokeWidth={1} /> <ArrowDown strokeWidth={1} />
        </div>
      </div>
*/}
          <div className="w-full flex flex-wrap gap-4">
            <div>Selected Tags</div>
            <div
              onClick={() => {
                setTagQuery([]);
              }}
              className="text-sm bg-red-400 hover:outline hover:outline-1 hover:cursor-pointer hover:outline-red-950 text-red-950 w-fit px-4 py-1 rounded"
            >
              Clear tags
            </div>
            <div className="w-full h-48 border rounded border-blue-950 border-dashed flex px-3 gap-3 py-3 flex-wrap">
              {tagQuery.map((tag, index) => {
                return (
                  <div
                    onClick={() => {
                      handleRemoveTag(index, tag);
                    }}
                    className="px-3 py-1 h-fit w-fit bg-blue-950 text-blue-50 rounded text-sm flex items-center justify-between gap-2 group hover:cursor-pointer"
                    key={index}
                  >
                    {tag}
                    <X
                      className="h-full aspect-square group-hover:bg-white/20 rounded"
                      size={16}
                      strokeWidth={1}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex w-full">
              <input
                onChange={(e) => {
                  setTagInput(e.target.value);
                }}
                className=" border px-3 h-10 w-[80%] rounded-l placeholder:text-sm"
                placeholder="Add tag"
              ></input>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (tagInput !== "") {
                    checkTagInQuery(tagInput);
                  }
                }}
                className="flex items-center justify-center bg-blue-950 text-blue-50 px-4 rounded-r"
              >
                Add
              </button>
            </div>
            <div className="text-xl text-zinc-700">Popular Tags</div>
            <div className="text-sm text-zinc-500">
              Use tags to narrow down your search for articles
            </div>

            <div className="flex w-full flex-wrap gap-3">
              {tags?.map((tag, index) => {
                return (
                  <div
                    className="px-3 py-1 h-fit w-fit bg-blue-950 text-blue-50 rounded text-sm flex items-center justify-between gap-2 group hover:cursor-pointer"
                    key={index}
                    onClick={() => {
                      checkTagInQuery(tag.title);
                    }}
                  >
                    {tag.title}
                    <p className="text-xs text-zinc-400">({tag.count})</p>
                    <Plus
                      className="h-full aspect-square group-hover:bg-white/20 rounded"
                      size={16}
                      strokeWidth={1}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      )}
    </aside>
  );
};

export default FeedFilter;
