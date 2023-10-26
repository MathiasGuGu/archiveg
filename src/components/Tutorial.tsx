import React from "react";
import { List, User2, PenLine, Heart, Share } from "lucide-react";
const Tutorial = () => {
  return (
    <div className="h-auto w-full max-w-4xl  flex flex-wrap text-sm ">
      <div className="flex flex-1 border-x bg-white/40 border-x-blue-950 min-w-[50%] md:min-w-[33%]  items-center justify-center gap-3 h-16">
        Visit the Feed <List strokeWidth={1} />
      </div>
      <div className="flex flex-1 border-x bg-white/40  border-x-blue-950  min-w-[50%] md:min-w-[33%]   items-center justify-center gap-3 h-16">
        Create an account <User2 strokeWidth={1} />
      </div>
      <div className="flex flex-1 border-x bg-white/40 border-x-blue-950  min-w-[50%] md:min-w-[33%]   items-center justify-center gap-3 h-16">
        Post your own article <PenLine strokeWidth={1} />
      </div>
      <div className="flex flex-1 border-x border-t-0 bg-white/40 border-x-blue-950   min-w-[50%] md:min-w-[33%] items-center justify-center gap-3 h-16">
        Like other articles <Heart strokeWidth={1} />
      </div>
      <div className="flex flex-1 border-x  border-t-0 bg-white/40 border-x-blue-950    min-w-[50%] md:min-w-[33%]  items-center justify-center gap-3 h-16">
        Share with your friends <Share strokeWidth={1} />
      </div>
    </div>
  );
};

export default Tutorial;
