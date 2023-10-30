import Image from "next/image";
import React from "react";
import quill from "../../public/Quill-Easily-read-and-write-to-your-PDF.png";
const Quill = () => {
  return (
    <div className="flex w-full items-center justify-center mt-32 flex-col gap-5">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row gap-3 ">
        <div className=" w-full md:w-1/2 h-[500px] flex flex-col justify-between  gap-3 px-8 py-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold text-blue-950">
              Use together with Quill!
            </h2>
            <p className="font-light">
              Export articles as PDFs and connect them to Quill!
            </p>
            <p className="">
              Archiveg seamlessly integrates with Quill. Export your articles as
              PDFs from the editor and import them to Quill. Quill is a PDF
              reader that lets you read and write to your PDFs. Quill is a great
              alternative for any student or teacher that wants to read and
              write to their PDFs.
            </p>
          </div>
          <button
            className="bg-blue-700 text-blue-50 py-2 rounded"
            aria-label="Try Quill"
          >
            Try Quill
          </button>
        </div>
        <div className="flex sm:w-full md:w-[50%] h-[500px] relative shadow">
          <Image
            alt="Illustration of a person using Quill to talk to a PDF file"
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
