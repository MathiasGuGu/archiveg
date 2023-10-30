"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import { Ghost, Loader2, MoveLeft, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AddPostSettings from "@/components/AddPostSettings";
import AddPostBodyElements from "@/components/AddPostBodyElements";
import MarkdownParser from "@/components/MarkdownParser";
import { userContext } from "@/app/providers";

/*EXAMPLE POST

# This is the first article i've ever written
So this time i am actually tying to test out the Editor that i've made. 
There are ofcourse some improvements that i would like, both in the UI/UX and in the functionality of the whole thing. But all in all i am pretty happy and would say this fits for a v1.0 release.

## The code editor/block
The codeblock ~~Editor~~  is something that i wanted to make sure worked. this is ofcourse, because most posts on this page by me will showcase code. And therefor the code editor makes it easy for readers to understand and read the code. 

## Showcase of the code editor.


**The Editor Features** 
  - Easily read the code
  - Copy the code for personal use (*Not implemented yet*)
  - Showcase code more easy


the editor itself looks like this: 
```js 
 // Write your code inside the codeblock 
 // You can choose your own language by changing JS to another language 
 // The below code is example code, remove everything except the first and last line var a = 1 
 const b = 3 
 const ab = (c) => { return a + b + c } 
```

It easily shows the code as you can see and makes it easy for people to read and understand. 

## Images in the editor
The editor fully accepts images as markdown. It is really simple to use. Just click the image icon above the text block and insert a functional image link. 
I usually use Unsplash for examples as it seamlesly integrates with markdown

**Example**
![Link Name](https://images.unsplash.com/photo-1645012656964-8632d7635191?auto=format&fit=crop&q=80&w=2062&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

*/

const Page = () => {
  const { current } = useContext(userContext);
  let id;

  current?.id ? (id = current.id) : (id = null);
  const [filePath, setFilePath] = useState<String | null>("");
  const [articlePreview, setArticlePreview] = useState<boolean>(true);
  const [showExampleText, setShowExampleText] = useState<boolean>(true);
  const [bodyText, setBodyText] = useState("");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});
  const [tags, setTags] = useState([]);
  const [tagsInput, setTagsInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [bodyText, title]);

  const validateForm = () => {
    let errors = {};
    if (!title) {
      errors.title = "A Title is required.";
    } else if (title.length < 4) {
      errors.title = "The title must have a minimum of 4 characters";
    }

    if (!bodyText) {
      errors.bodyText = "Body is required.";
    } else if (bodyText.length < 50) {
      errors.bodyText = "The body mush have 50 or more characters.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const bodyRef = useRef(null);

  const handlePostSubmit = async (e: any) => {
    e.preventDefault();

    const title = e.target[0].value;
    const body = e.target[1].value;

    setIsSubmitting(true);
    const req = await fetch("http://localhost:3000/api/addpost", {
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
    const selectionStart = body.selectionStart;
    const selectionEnd = body.selectionEnd;
    const value = body.value;

    body.value =
      value.slice(0, selectionEnd) + "\n" + element + value.slice(selectionEnd);

    setBodyText(body.value);
  };

  const handleRemoveTag = (value) => {
    setTags((prev) => {
      const newTags = prev.filter((tag) => {
        return tag !== value;
      });

      return newTags;
    });
  };

  const checkTagInQuery = (value) => {
    if (!tags.includes(value)) {
      setTags((prev) => [...prev, value]);
    } else {
      toast.error("You have already included that tag");
    }
  };

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
              setFilePath(res[0].url);
              setBodyText(
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
                  {tags.map((tag, index) => {
                    return (
                      <div
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
        </form>
      </div>
    </div>
  );
};

export default Page;
