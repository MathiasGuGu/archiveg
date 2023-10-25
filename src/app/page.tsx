import AddPostBtn from "@/components/AddPostBtn";
import EditorShowcase from "@/components/EditorShowcase";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostContainer from "@/components/PostContainer";
import Quill from "@/components/Quill";
import TagsExample from "@/components/TagsExample";
import Tutorial from "@/components/Tutorial";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full flex flex-col gap-12 pt-64">
      <Navbar></Navbar>
      <AddPostBtn></AddPostBtn>
      <section className="w-full h-auto flex flex-col gap-12 items-center justify-center relative px-2">
        <div className=" bg-gradient-to-tr from-blue-500 shadow-xl border-2 border-blue-300 to-cyan-600 w-full h-auto py-3 px-4 max-w-2xl rounded-xl flex flex-col">
          <h2 className=" text-blue-50 text-2xl font-bold">
            In the development phase
          </h2>
          <p className="text-sm text-blue-200">
            This app is still being developed. The current version is v0.8
          </p>
          <p className="text-sm text-blue-200">
            Thank you for trying this app.
          </p>
        </div>
        <h1 className=" text-4xl md:text-6xl text-center max-w-4xl font-bold text-blue-950">
          Discover interesting articles about every Subject!
        </h1>
        <p className="text-center text-sm max-w-xl text-zinc-700">
          ArchiveG easily lets you find the articles you need. Simply view the
          feed, or search for the subjects you need. There is no simpler way...
          To get started, create an account and start reading!
        </p>
        <div className="flex gap-6">
          <LoginLink className="border-2 border-blue-800 bg-blue-700 text-blue-50 rounded px-12 py-1   ">
            Sign in
          </LoginLink>
          <RegisterLink className="border-2 px-12 py-1 border-blue-950 rounded hover:bg-blue-950 hover:text-blue-50">
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
        <Quill></Quill>
        <EditorShowcase></EditorShowcase>
      </section>
      <section className="w-full h-auto pt-32 flex flex-col items-center justify-center">
        <TagsExample></TagsExample>
      </section>
      <section className="flex flex-col items-center justify-center"></section>
      <Footer></Footer>
    </div>
  );
}
