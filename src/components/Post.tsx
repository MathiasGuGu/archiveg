import Image from "next/image";
import Link from "next/link";
import React from "react";
import MarkdownParser from "./MarkdownParser";
import Markdown from "react-markdown";
interface User {
  id: string;
  name: string;
  email: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
  slug: string;
  userId: string;
  user: User;
}
const Post = (data: Post) => {
  const {
    body,
    id,
    slug,
    title,
    userId,
    author,
    authorEmail,
    image,
    createdAt,
    tags,
    // @ts-ignore: Unreachable code error
  } = data?.post;

  return (
    <>
      {image !== "" ? (
        <PostWithImage>
          <div className="relative w-full h-80">
            <Image
              alt="something"
              src={image}
              fill
              className="object-cover rounded-t "
            ></Image>
          </div>
          <Link
            href={`/a/${id}`}
            className=" w-full border px-6 py-6 rounded-b hover:outline hover:outline-1  flex flex-col "
          >
            <div className="flex flex-col md:flex-row gap-4 items-center mb-3 ">
              <h2 className="text-2xl  font-bold text-blue-950">{title}</h2>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag: any, index: Number) => {
                  return (
                    <div
                      // @ts-ignore: Unreachable code error

                      key={index}
                      className="h-full  px-3 text-sm  bg-blue-950/10 text-blue-700 rounded flex items-center justify-center"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
            <Markdown className={"max-h-24 overflow-hidden"}>{body}</Markdown>
          </Link>
        </PostWithImage>
      ) : (
        <PostWithoutImage>
          <Link
            href={`/a/${id}`}
            className=" w-full border px-6 py-6 rounded hover:outline hover:outline-1 "
          >
            <div className="flex flex-col gap-4   mb-3 ">
              <h2 className="text-2xl  font-bold text-blue-950">{title}</h2>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag: any, index: Number) => {
                  return (
                    <div
                      // @ts-ignore: Unreachable code error

                      key={index}
                      className="h-full  px-3 text-sm  bg-blue-950/10 text-blue-700 rounded flex items-center justify-center"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
            <Markdown className={"max-h-24 w-full  "}>{body}</Markdown>
          </Link>
        </PostWithoutImage>
      )}
    </>
  );
};

export const PostWithImage = ({ children }: any) => {
  return (
    <div className="w-full h-auto flex flex-col max-h-96 max-w-3xl bg-white">
      {children}
    </div>
  );
};
export const PostWithoutImage = ({ children }: any) => {
  return (
    <div className="w-full h-auto flex flex-col max-w-3xl max-h-96 overflow-hidden bg-white">
      {children}
    </div>
  );
};

export default Post;
