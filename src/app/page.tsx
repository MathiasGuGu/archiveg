import AddPostBtn from "@/components/AddPostBtn";
import EditorShowcase from "@/components/EditorShowcase";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostContainer from "@/components/PostContainer";
import Quill from "@/components/Quill";
import TagsExample from "@/components/TagsExample";
import Tutorial from "@/components/Tutorial";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Line from "../../public/svg/handdrawnline.svg";
import Image from "next/image";
import Anouncement from "@/components/Anouncement";

/* 
background-color: #e5e5f7;
opacity: 0.4;
background-image: radial-gradient(#444cf7 0.9500000000000001px, #e5e5f7 0.9500000000000001px);
background-size: 19px 19px;
*/

export default function Home() {
  return (
    <div
      className="w-full flex flex-col gap-12 pt-48 bg-opacity-40 "
      style={{
        backgroundImage:
          " radial-gradient(#444cf750 0.9500000000000001px, #e5e5f750 0.9500000000000001px)",
        backgroundSize: "19px 19px",
      }}
    >
      <Navbar></Navbar>
      <AddPostBtn></AddPostBtn>
      <section className="w-full h-auto flex flex-col gap-12 items-center justify-center relative px-2">
        <Anouncement />
        <h1 className=" text-4xl md:text-6xl text-center max-w-4xl font-bold text-primary">
          Discover interesting <div className="inline relative ">articles </div>{" "}
          about every Subject!
        </h1>
        <p className="text-center text-sm max-w-xl text-zinc-700">
          ArchiveG easily lets you find the articles you need. Simply view the
          feed, or search for the subjects you need. There is no simpler way...
          To get started, create an account and start reading!
        </p>
        <div className="flex gap-6">
          <LoginLink className="border-2 px-12 py-1 border-blue-950 rounded hover:bg-blue-950 hover:text-blue-50">
            Sign in
          </LoginLink>
          <RegisterLink className="border-2 border-blue-800 bg-blue-700 text-blue-50 rounded px-12 py-1">
            Sign up
          </RegisterLink>
        </div>
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-300 left-12 top-1 to-blue-800 absolute -z-50 blur-3xl opacity-30"></div>
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-300 right-12 -top-32 to-blue-800 absolute -z-50 blur-3xl opacity-40"></div>
      </section>
      <section className="w-full h-auto pt-32 flex flex-col items-center justify-center">
        <Tutorial></Tutorial>
      </section>

      <section>
        <EditorShowcase></EditorShowcase>

        <Quill></Quill>
      </section>
      <section className="w-full h-auto pt-32 flex flex-col items-center justify-center">
        <TagsExample></TagsExample>
      </section>
      <Footer></Footer>
    </div>
  );
}
