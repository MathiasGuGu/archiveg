import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import React, { useState } from "react";

const AddPostSettings = ({
  articlePreview,
  setArticlePreview,
  showExampleText,
  setShowExampleText,
}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(true);
  return (
    <div
      className={cn({
        "h-full md:shadow z-40  md:bg-none fixed top-1/2 -translate-y-1/2 left-0 flex flex-col items-center  pt-48 gap-12":
          true,
        "w-14": !isSettingsOpen,
        "w-64 bg-white": isSettingsOpen,
      })}
    >
      <div
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        className="p-1 rounded bg-white  hover:bg-zinc-300/20 hover:cursor-pointer text-xl font-bold text-blue-950 flex gap-3 items-center justify-center"
      >
        <Settings className=" h-10 w-10 p-1" strokeWidth={1} />{" "}
        <p className="sr-only">Settings menu</p>
        {isSettingsOpen && <h2> Settings </h2>}
      </div>
      {isSettingsOpen && (
        <div className="flex flex-col gap-12 items-center">
          <div className="flex items-center justify-center gap-3">
            <p className="text-sm ">Enable Article Preview</p>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={articlePreview}
                readOnly
              />
              <div
                onClick={() => {
                  setArticlePreview(!articlePreview);
                }}
                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
              ></div>
            </label>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-sm ">Include example text</p>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                readOnly
                checked={showExampleText}
              />
              <div
                onClick={() => {
                  setShowExampleText((prev) => !prev);
                }}
                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
              ></div>
            </label>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p className="text-sm ">Choose your own slug</p>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={false}
                readOnly
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPostSettings;
