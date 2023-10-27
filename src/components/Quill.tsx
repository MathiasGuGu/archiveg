import Image from "next/image";
import React from "react";
import quill from "../../public/Quill-Easily-read-and-write-to-your-PDF.png";
const Quill = () => {
  return (
    <div className="flex w-full items-center justify-center mt-32 flex-col gap-5">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row gap-3 ">
        <div className="bg-white w-full md:w-1/2 h-[500px] flex flex-col justify-between  gap-3 px-8 py-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-blue-950">
              Use together with Quill!
            </h2>
            <p className="font-light">
              Export articles as PDFs and connect them to Quill!
            </p>
            <p className="">
              Quill lets you talk to your PDF files. So find an article you
              like, export it as a PDF and start asking it questions!
            </p>
          </div>
          <button className="bg-blue-700 text-blue-50 py-2 rounded">
            Try Quill
          </button>
        </div>
        <div className="flex sm:w-full md:w-[50%] h-[500px] relative shadow">
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

export default Quill;
