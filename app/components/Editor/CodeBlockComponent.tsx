import { NodeViewContent, NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import React from "react";

type CodeBlockProps = NodeViewProps; // Use NodeViewProps directly

const CodeBlockComponent: React.FC<CodeBlockProps> = ({
  node,
  updateAttributes,
  extension,
}) => {
  const defaultLanguage = node.attrs.language;

  return (
    <NodeViewWrapper className="code-block py-7">
      <select
        className="relative  float-right"
        contentEditable={false}
        defaultValue={defaultLanguage || "null"}
        onChange={(event) =>
          updateAttributes({
            language: event.target.value === "null" ? null : event.target.value,
          })
        }
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight
          .listLanguages()
          .map((lang: string, index: number) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
      </select>
      <pre>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
};

export default CodeBlockComponent;
