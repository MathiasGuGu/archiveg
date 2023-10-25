import React from "react";
import Skeleton from "react-loading-skeleton";
import Markdown from "react-markdown";

const EditPost = ({ postData, setIsEditing }) => {
  return (
    <div className="w-full h-auto relative flex items-center justify-center">
      <div className="fixed rounded-xl bg-blue-950 py-2 shadow-xl   px-8 h-auto bottom-12 right-32  flex flex-col gap-5 items-end justify-end">
        <div className="flex gap-4">
          <button className="  rounded-xl  bg-blue-50/10 text-blue-50 px-4 py-1">
            Reset
          </button>

          <button className="  rounded-xl  bg-blue-50/10 text-blue-50  px-4 py-2">
            Save Post
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
            }}
            className="  rounded-xl  bg-blue-50/10 text-blue-50 px-4 py-1"
          >
            Stop Editing
          </button>
        </div>
      </div>
      {postData?.body ? (
        <form className="w-full h-auto items-center justify-center flex flex-col">
          <Markdown
            components={{
              // Map `h1` (`# heading`) to use `h2`s.
              h1(props) {
                const { node, ...rest } = props;
                return (
                  <input
                    id={rest.children}
                    className=" border px-2 py-3 rounded border-zinc-600  border-dashedfont-bold text-xl mt-12"
                    defaultValue={"#" + rest.children}
                  ></input>
                );
              },
              p(props) {
                const { node, ...rest } = props;
                return (
                  <textarea
                    id={rest.children}
                    className=" border px-12 py-5 rounded w-full h-56 border-zinc-600 border-dashed "
                    defaultValue={rest.children}
                  ></textarea>
                );
              },
              li(props) {
                const { node, ...rest } = props;
                return (
                  <input
                    id={rest.children}
                    className=" border px-2 py-3 rounded border-zinc-600  border-dotted font-bold text-xl "
                    defaultValue={rest.children}
                  ></input>
                );
              },
              // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
              em(props) {
                const { node, ...rest } = props;
                return (
                  <input
                    id={rest.children}
                    className=" border px-2 py-3 rounded border-blue-600  border-dotted font-bold text-xl"
                    defaultValue={rest.children}
                  ></input>
                );
              },
            }}
            className=" max-w-4xl w-full flex flex-col gap-2 "
          >
            {postData?.body}
          </Markdown>
        </form>
      ) : (
        <Skeleton count={5} height={100} />
      )}
    </div>
  );
};

export default EditPost;
