// Editor.tsx
import { useEffect, useState } from "react";
import {
  useEditor,
  ReactNodeViewRenderer,
  EditorContent,
  Editor as TipTapEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Blockquote from "@tiptap/extension-blockquote";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
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

const CustomDocument = Document.extend({
  content: "heading block*",
});

function BlockEditor({ onChange, initialContent = "" }: TextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlockComponent);
        },
      }).configure({ lowlight }),

      CustomDocument,
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: ({ node }) =>
          node.type.name === "heading"
            ? "What’s the title?"
            : "Start typing...",
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
