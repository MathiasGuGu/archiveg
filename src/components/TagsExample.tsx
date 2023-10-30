import React from "react";

type Tag = string;

const tags: Tag[] = [
  "TailwindCss",
  "React",
  "NextJs",
  "Html",
  "Css",
  "Python",
  "Javascript",
  "Typescript",
];

const TagsExample: React.FC = () => {
  return (
    <div
      className="w-[80%] flex flex-col items-center justify-center  gap-2 py-12 px-12 bg-blue-950 text-white rounded-xl shadow-xl "
      style={{
        backgroundImage:
          " radial-gradient(#f5f5f530 0.9500000000000001px, rgb(15 12 70) 0.9500000000000001px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="w-full flex flex-col items-center justify-center  px-4 gap-5">
        <div className="w-full  flex flex-wrap gap-3 justify-center">
          {tags.map((tag: Tag, index: number) => {
            return (
              <div
                key={index}
                className={`px-4 py-1 h-fit bg-blue-700/20 text-white rounded text-sm  transform hover:cursor-pointer hover:bg-blue-700 hover:bg-opacity-50 hover:shadow-lg transition-all duration-200}}]`}
              >
                {tag}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 w-full h-auto py-5 items-center justify-center">
          <h2 className="text-4xl font-bold text-blue-600">
            Browse articles by Tags
          </h2>
          <div className="text-sm max-w-sm text-center">
            <p>Find different lists, top posts and articles based on tags.</p>
            <p>
              All articles are created with tags which makes it easy to filter
              and find what you need
            </p>
          </div>
          <p className="mt-8  bg-blue-800  px-8 py-2 text-blue-50 rounded-full shadow-lg shadow-blue-600/40">
            Find a list of all tags here
          </p>
        </div>
      </div>
    </div>
  );
};

export default TagsExample;
