"use client";
import React from "react";
// @ts-ignore: Unreachable code error

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore: Unreachable code error

import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
const MarkdownParser = ({ bodyText }: any) => {
  return (
    <div>
      <Markdown
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          // Map `h1` (`# heading`) to use `h2`s.
          h1(props) {
            const { node, ...rest } = props;

            return (
              <h2
                // @ts-ignore: Unreachable code error

                id={rest.children}
                className="  font-bold text-2xl mt-12 mb-3 text-blue-950"
                {...rest}
              ></h2>
            );
          },
          h2(props) {
            const { node, ...rest } = props;

            return (
              <h3
                // @ts-ignore: Unreachable code error

                id={rest.children}
                className="  font-semibold text-xl   text-blue-950"
                {...rest}
              ></h3>
            );
          },
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                wrapLines={true}
                style={darcula}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },

          li(props) {
            const { node, ...rest } = props;
            return (
              <li
                className="text-zinc-800 text-sm   ml-5 list-disc"
                {...rest}
              ></li>
            );
          },
          p(props) {
            const { node, ...rest } = props;
            return <p className="text-zinc-800   " {...rest}></p>;
          },
          strong(props) {
            const { node, ...rest } = props;
            return (
              // @ts-ignore: Unreachable code error
              <p
                className="bg-zinc-300/30 w-fit inline px-2 py-1 rounded text-red-700/70 "
                {...rest}
              ></p>
            );
          },
          // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
          em(props) {
            const { node, ...rest } = props;
            return <i className="  italic text-gray-700" {...rest} />;
          },
          a(props) {
            const { node, ...rest } = props;
            return <a className="  text-blue-600 hover:underline" {...rest} />;
          },
          img(props) {
            const { node, ...rest } = props;
            return (
              <Image
                alt="Blog Image"
                // @ts-ignore: Unreachable code error

                width={600}
                // @ts-ignore: Unreachable code error

                height={500}
                className="rounded-lg"
                {...rest}
              />
            );
          },
        }}
      >
        {bodyText}
      </Markdown>
    </div>
  );
};

export default MarkdownParser;
