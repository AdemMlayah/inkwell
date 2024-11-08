import {
  useEditor,
  ReactNodeViewRenderer,
  EditorContent,
  Editor as TipTapEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { TrailingNode } from "./Extensions/trailing-node";

import "./editor.css";
import { ContentItemMenu } from "./ContentItemMenu";
import { lowlight } from "./Extensions/LowLight";
import CodeBlockComponent from "./CodeBlockComponent";
import ContentBubbleMenu from "./ContentBubbleMenu";

type TextEditorProps = {
  onChange: (content: string) => void;
  initialContent?: string;
};

function BlockEditor({ onChange, initialContent = "" }: TextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlockComponent);
        },
      }).configure({ lowlight }),

      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        codeBlock: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) =>
          node.type.name === "heading" ? "What’s the title?" : "",
      }),
      TrailingNode,
    ],
    content: initialContent || "<h1></h1>",
    onUpdate: ({ editor }) => {
      // onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "outline-none m-10 lg:m-20 h-[110%]",
      },
    },
  });

  return (
    <div spellCheck="false" className="flex w-screen justify-center">
      <ContentBubbleMenu editor={editor} />
      <EditorContent editor={editor} className="lg:w-4/6 w-full" />
      <ContentItemMenu editor={editor} />
    </div>
  );
}

export default BlockEditor;
