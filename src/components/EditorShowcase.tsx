import Image from "next/image";
import React from "react";
import quill from "../../public/argshowcase.png";
const EditorShowcase = () => {
  return (
    <div className="flex w-full items-center justify-center mt-32 flex-col gap-5">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row-reverse gap-3 ">
        <div className="bg-white w-full md:w-1/2 h-[500px]  flex flex-col justify-between  gap-3 px-8 py-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-blue-950">
              Easily create you own article with the editor.
            </h2>
            <p className="font-light">
              ArchiveG has its own customized editor for creating articles.
            </p>
            <p className="">
              Archiveg easily lets the users write and edit their posts. The built in editor uses markdown to easily style and structure the content. 
              The editor includes boilerplate code and text to showcase how it should be used to build beautiful and contentful articles.
              Write everything from text to complex math-problems, easily, with archiveg
            </p>
          </div>
          <a href="/" className="bg-blue-700 text-blue-50 py-2 rounded flex items-center justify-center  justify-self-end">
            Start Writing
          </a>
        </div>
        <div className="flex w-[50%] h-[500px] relative shadow">
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
