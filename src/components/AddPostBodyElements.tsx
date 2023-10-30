import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Highlighter,
  ImageIcon,
  Italic,
  Link2,
  List,
  Quote,
  Strikethrough,
} from "lucide-react";
import React from "react";

const H1 = "# Heading 1";
const H1N = "# ";
const H2 = "## Heading 2";
const H2N = "## ";
const BOLD = "**Bold Text**";
const BOLDN = "**   **";
const ITALIC = "*Italic Text*";
const ITALICN = "*   *";
const BLOCKQUOTE = "> Quote";
const BLOCKQUOTEN = "> ";
const ORDERED_LIST = `
  1. First Item
  2. Second Item
  3. Third Item
`;
const ORDERED_LISTN = `
  1. 
  2. 
  3. 
`;
const UNORDERED_LIST = `
  - First Item
  - Second Item
  - Third Item
`;
const UNORDERED_LISTN = `
  - 
  - 
  - 
`;
const CODE =
  "```js \n // Write your code inside the codeblock \n // You can choose your own language by changing JS to another language \n // The below code is example code, remove everything except the first and last line var a = 1 \n const b = 3 \n const ab = (c) => { return a + b + c } \n```";
const CODEN = "```js \n \n ```";
const LINK = "[Title](https://example.com/)";
const LINKN = "[Title]()";
const IMAGE = "![Link Name](Link URL)";
const IMAGEN = "![Link]()";
const STRIKETHROUGH = "~~The world is flat.~~";
const STRIKETHROUGHN = "~~   ~~";
const HIGHLIGHT = "==very important words==";
const HIGHLIGHTN = "==   ==";

const AddPostBodyElements = ({
  handleAddMarkdown,
  showExampleText,
  setShowExampleText,
}: any) => {
  return (
    <div className="w-full h-auto max-w-5xl   flex flex-wrap gap-2 p-1 text-sm text-zinc-700">
      <div
        onClick={() => handleAddMarkdown(showExampleText ? H1 : H1N)}
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <Heading1 strokeWidth={1} />
      </div>
      <div
        onClick={() => handleAddMarkdown(showExampleText ? H2 : H2N)}
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <Heading2 strokeWidth={1} />
      </div>

      <div
        onClick={() =>
          handleAddMarkdown(showExampleText ? UNORDERED_LIST : UNORDERED_LISTN)
        }
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <List strokeWidth={1} />
      </div>

      <div
        onClick={() => handleAddMarkdown(showExampleText ? ITALIC : ITALICN)}
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <Italic strokeWidth={1} />
      </div>
      <div
        onClick={() => handleAddMarkdown(showExampleText ? BOLD : BOLDN)}
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <Bold strokeWidth={1} />
      </div>
      <div
        onClick={() =>
          handleAddMarkdown(showExampleText ? STRIKETHROUGH : STRIKETHROUGHN)
        }
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <Strikethrough strokeWidth={1} />
      </div>
      <div
        onClick={() => handleAddMarkdown(showExampleText ? LINK : LINKN)}
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <Link2 strokeWidth={1} />
      </div>
      <div
        onClick={() =>
          handleAddMarkdown(showExampleText ? BLOCKQUOTE : BLOCKQUOTEN)
        }
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <Quote strokeWidth={1} />
      </div>
      <div
        onClick={() =>
          handleAddMarkdown(showExampleText ? HIGHLIGHT : HIGHLIGHTN)
        }
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <Highlighter strokeWidth={1} />
      </div>
      <div
        onClick={() => handleAddMarkdown(showExampleText ? CODE : CODEN)}
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <Code strokeWidth={1} />
      </div>
      <div
        onClick={() => handleAddMarkdown(showExampleText ? IMAGE : IMAGEN)}
        className="px-5 py-2 border rounded hover:bg-zinc-200/30 hover:cursor-pointer"
      >
        <ImageIcon strokeWidth={1} />
      </div>
    </div>
  );
};

export default AddPostBodyElements;
