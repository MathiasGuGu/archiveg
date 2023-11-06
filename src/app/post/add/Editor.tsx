"use client";

import React, { useEffect, useRef, useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import { Ghost, Loader2, MoveLeft, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, cn } from "@/lib/utils";
import AddPostSettings from "@/components/AddPostSettings";
import AddPostBodyElements from "@/components/AddPostBodyElements";
import MarkdownParser from "@/components/MarkdownParser";

const Editor = ({ user, isAuthenticated }: any) => {
  const [filePath, setFilePath] = useState<String | null>("");
  const [articlePreview, setArticlePreview] = useState<boolean>(true);
  const [showExampleText, setShowExampleText] = useState<boolean>(true);
  const [bodyText, setBodyText] = useState("");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [tags, setTags] = useState<any>([]);
  const [tagsInput, setTagsInput] = useState<any>("");
  const [isSubmitting, setIsSubmitting] = useState<any>(false);
  const [isFormValid, setIsFormValid] = useState<any>(false);

  const id = user?.id || null;

  const bodyRef = useRef(null);

  const handlePostSubmit = async (e: any) => {
    if (id === null) {
      return;
    }

    e.preventDefault();

    const title = e.target[0].value;
    const body = e.target[1].value;

    setIsSubmitting(true);
    const req = await fetch(absoluteUrl("/api/addpost"), {
      method: "POST",
      body: JSON.stringify({
        image: filePath,
        title,
        body,
        tags,
        id,
      }),
    });
    const json = await req.json();
    setIsSubmitting(false);
    json.success
      ? toast.success("Your article was posted")
      : toast.error(json.message);
  };

  const handleAddMarkdown = (element: string) => {
    setBodyText((prev: string) => prev + "\n" + element);
    const body = bodyRef.current;
    // @ts-ignore: Unreachable code error

    const selectionStart = body.selectionStart;
    // @ts-ignore: Unreachable code error

    const selectionEnd = body.selectionEnd;
    // @ts-ignore: Unreachable code error

    const value = body.value;
    // @ts-ignore: Unreachable code error
    body.value =
      value.slice(0, selectionEnd) + "\n" + element + value.slice(selectionEnd);
    // @ts-ignore: Unreachable code error
    setBodyText(body.value);
  };

  const handleRemoveTag = (value: any) => {
    setTags((prev: any) => {
      const newTags = prev.filter((tag: any) => {
        return tag !== value;
      });

      return newTags;
    });
  };

  const checkTagInQuery = (value: any) => {
    if (!tags.includes(value)) {
      setTags((prev: any) => [...prev, value]);
    } else {
      toast.error("You have already included that tag");
    }
  };
  useEffect(() => {
    const validateForm = () => {
      let errors = {};
      if (!title) {
        // @ts-ignore: Unreachable code error
        errors.title = "A Title is required.";
      } else if (title.length < 4) {
        // @ts-ignore: Unreachable code error
        errors.title = "The title must have a minimum of 4 characters";
      }

      if (!bodyText) {
        // @ts-ignore: Unreachable code error
        errors.bodyText = "Body is required.";
      } else if (bodyText.length < 50) {
        // @ts-ignore: Unreachable code error
        errors.bodyText = "The body mush have 50 or more characters.";
      }

      setErrors(errors);
      setIsFormValid(Object.keys(errors).length === 0);
    };

    validateForm();
  }, [bodyText, title]);

  return (
    <div className="w-full h-auto px-5 py-32 flex items-center justify-center relative">
      {isSubmitting ? (
        <div className="w-full h-full top-0 left-0 border fixed bg-white/60 z-30 flex flex-col gap-3 items-center justify-center">
          <Loader2 className="animate-spin text-blue-500" size={56}></Loader2>
          <p className="text-blue-600 font-bold">Article is being publised</p>
        </div>
      ) : null}
      <AddPostSettings
        showExampleText={showExampleText}
        setShowExampleText={setShowExampleText}
        articlePreview={articlePreview}
        setArticlePreview={setArticlePreview}
      ></AddPostSettings>
      <nav className="w-full h-16 text-blue-950 fixed top-0 left-0  flex items-center px-14 gap-4">
        <Link
          href={"/"}
          className="flex gap-3  px-2 py-1 rounded hover:bg-zinc-200/30"
        >
          <MoveLeft strokeWidth={1} />
          Go Back
        </Link>
      </nav>

      <div className="w-full h-auto max-w-4xl flex flex-col items-center justify-center">
        {!isAuthenticated && (
          <div className="w-full max-w-xl mb-12 bg-[#f9f9f9] px-2 py-2 rounded shadow-sm text-sm text-zinc-700">
            <p>You are not logged in</p>
            <p>You can use the editor but you can not post the article</p>
          </div>
        )}
        <div className="w-full max-w-xl pb-12">
          <p className="text-xl text-zinc-700">Article Image</p>
          <p className="text-sm text-zinc-500">
            You can only have 1 image per article
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-12">
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              setFilePath("");
              // @ts-ignore: Unreachable code error
              setFilePath(res[0].url);

              setBodyText(
                // @ts-ignore: Unreachable code error

                (prev) => `![Link Name](${res[0].url})` + "\n" + prev
              );
              toast.success("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              toast.error(`ERROR! ${error.message}`);
            }}
          />
          {filePath !== "" && (
            <div className="w-1/3 h-48 relative">
              <Image
                alt="Hero Image"
                className="rounded object-cover"
                fill
                // @ts-ignore: Unreachable code error
                src={filePath}
              />
            </div>
          )}
        </div>
        <form
          onSubmit={(e) => {
            handlePostSubmit(e);
          }}
          className="w-full h-auto flex flex-col gap-12 py-12  max-w-xl "
        >
          <div className="w-full flex flex-col gap-2">
            <div
              className={cn({
                "text-xl text-zinc-700": true,
                "": errors.title,
              })}
            >
              Title *
            </div>
            <input
              onInput={(e) => {
                // @ts-ignore: Unreachable code error
                setTitle(e.target.value);
              }}
              required
              className={cn({
                " border px-3 h-10 rounded placeholder:text-sm": true,
                " border-red-600": errors.title,
              })}
              placeholder="My awesome article"
            ></input>
            {errors.title && (
              <p className="text-sm text-red-600">* {errors.title}</p>
            )}
          </div>

          <div className="w-full flex flex-col gap-5">
            <div className="text-xl text-zinc-700 flex items-center gap-3">
              Body * <p className="text-sm text-zinc-400">show example text</p>
              <div
                className={cn({
                  " px-2 py-1  text-sm rounded": true,
                  "bg-green-300 text-green-900": showExampleText,
                  "bg-red-300 text-red-900": !showExampleText,
                })}
              >
                {showExampleText ? "On" : "Off"}
              </div>
            </div>
            <div className="text-sm text-zinc-500 space-y-5">
              You can use Markdown to give the article style (
              <a
                className="text-blue-500 underline"
                href="https://www.markdownguide.org/getting-started/"
              >
                Get to know markdown here
              </a>
              )
              <AddPostBodyElements
                showExampleText={showExampleText}
                setShowExampleText={setShowExampleText}
                handleAddMarkdown={handleAddMarkdown}
              ></AddPostBodyElements>
            </div>

            <textarea
              required
              onChange={(e) => {
                setBodyText(filePath ? `![Link Name](${filePath})` + "\n" : "");
                setBodyText((prev) => prev + e.target.value);
              }}
              ref={bodyRef}
              className={cn({
                " border px-3 py-3  rounded placeholder:text-sm resize-none h-96":
                  true,
                "border-red-600": errors.bodyText,
              })}
              placeholder="This is what i will be talking about today"
              defaultValue={bodyText}
            />
            {errors.bodyText && (
              <p className="text-sm text-red-600">* {errors.bodyText}</p>
            )}
            <div className="w-full h-auto md:h-24 mt-24 p-3 rounded-xl  bg-gradient-to-tr from-blue-500 to-cyan-700">
              <h2 className="text-xl md:text-2xl text-blue-50 font-bold">
                Note
              </h2>
              <p className="text-sm text-blue-100">
                A fully editable article showcase is being developed.
              </p>
              <p className="text-sm text-blue-100">
                If youre having trouble with the current editor please contact
                me.
              </p>
            </div>

            <div className="text-xl text-zinc-700  mt-6 flex gap-3">
              Article Preview{" "}
              <div
                className={cn({
                  " px-2 py-1  text-sm rounded": true,
                  "bg-green-300 text-green-900": articlePreview,
                  "bg-red-300 text-red-900": !articlePreview,
                })}
              >
                {articlePreview ? "On" : "Off"}
              </div>
            </div>
            <div className="text-sm text-zinc-500">
              Note that this is not what the article will look like on all
              screensizes. Some line wraps will be different
            </div>
            {articlePreview && (
              <div className=" mt-12 p-4 border border-dashed border-blue-950">
                <MarkdownParser bodyText={bodyText}></MarkdownParser>
              </div>
            )}
          </div>
          <div className="w-full h-auto flex flex-col gap-2 ">
            <div className="text-sm text-zinc-500 w-full flex flex-col gap-4 items-center justify-center">
              <h2 className="underline">Current selected tags</h2>
              {tags.length === 0 ? (
                <>
                  <Ghost size={20} strokeWidth={2} />
                  <p>No tags added</p>
                </>
              ) : (
                <div className="flex gap-3 flex-wrap  w-full">
                  {tags.map((tag: any, index: Number) => {
                    return (
                      <div
                        // @ts-ignore: Unreachable code error

                        key={index}
                        onClick={() => handleRemoveTag(tag)}
                        className="border px-3 group py-1 flex items-center hover:cursor-pointer justify-center gap-1 rounded bg-blue-950/10 text-blue-600"
                      >
                        {tag}{" "}
                        <X
                          className="p-1 h-7 w-7 rounded group-hover:bg-blue-950/5 duration-150"
                          strokeWidth={1}
                          size={20}
                        ></X>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="text-xl text-zinc-700">Tags</div>
            <p className="text-sm text-zinc-500">
              Tags make your article easier to find.
            </p>
            <input
              onInput={(e) => {
                // @ts-ignore: Unreachable code error
                setTagsInput(e.target.value);
              }}
              className=" border px-3  rounded placeholder:text-sm resize-none h-10"
              placeholder="TailwindCss, React, NextJs..."
            ></input>
            <div
              onClick={() => {
                checkTagInQuery(tagsInput);
              }}
              className="px-3 py-1  border w-fit border-blue-900 text-blue-900 text-sm hover:bg-blue-900 hover:text-blue-50 hover:cursor-pointer"
            >
              Add Tag
            </div>
          </div>
          {isAuthenticated ? (
            <button
              disabled={!isFormValid}
              type="submit"
              className="bg-blue-950 w-fit hover:bg-blue-950/90 duration-150 rounded hover:cursor-pointer text-blue-50 px-6 py-2 self-center mt-32"
            >
              {isSubmitting ? (
                <Loader2 className=" animate-spin"></Loader2>
              ) : (
                <div
                  className="w-full h-full"
                  onClick={() => {
                    if (!isFormValid) {
                      console.log("error");
                      toast.error(
                        "Fill in all the necessary fields before submitting"
                      );
                    } else {
                      console.log("Valid submit");
                    }
                  }}
                >
                  {" "}
                  Publish Article
                </div>
              )}
            </button>
          ) : (
            <p>You need to be logged in to post</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Editor;
