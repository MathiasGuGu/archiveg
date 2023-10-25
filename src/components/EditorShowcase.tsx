import Image from "next/image";
import React from "react";
import quill from "../../public/argshowcase.png";
const EditorShowcase = () => {
  return (
    <div className="flex w-full items-center justify-center mt-32 flex-col gap-5">
      <div className="w-full max-w-4xl flex flex-col-reverse md:flex-row-reverse gap-3 ">
        <div className="bg-white w-full md:w-1/2 h-72 flex flex-col justify-between  gap-3 px-8 py-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-blue-950">
              Easily create you own article with the editor.
            </h2>
            <p className="font-light">
              ArchiveG has its own customized editor for creating articles.
            </p>
            <p className="">
              Simply go into the editor by clicking the + button in the right
              hand corner. When there, start writing!
            </p>
          </div>
          <button className="bg-blue-950 text-blue-50 py-2 rounded">
            Start Writing
          </button>
        </div>
        <div className="flex w-[27rem] h-72 relative shadow">
          <Image
            alt="something"
            src={quill}
            fill
            className="rounded-lg object-cover object-top overflow-hidden"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default EditorShowcase;
