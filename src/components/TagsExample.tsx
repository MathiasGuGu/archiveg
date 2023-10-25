import React from "react";

const TagsExample = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-centermd:gap-3 gap-12 w-full max-w-4xl h-auto">
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-2xl font-bold  text-blue-950">
          Browse articles by Tags
        </h2>
        <div className="text-sm max-w-sm">
          <p>Find different lists, top posts and articles base on tags.</p>
          <p>
            All articles are created with tags which makes it easy to filter and
            find what you need
          </p>
        </div>
        <p className="mt-8 underline text-blue-600">
          Find a list of all tags here
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-wrap gap-3 justify-center">
        {[
          "TailwindCss",
          "React",
          "NextJs",
          "Html",
          "Css",
          "Python",
          "Javascript",
          "Typescript",
        ].map((tag) => {
          return (
            <div className="px-4 py-1 h-fit bg-blue-950/10 text-blue-600  rounded text-sm">
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagsExample;