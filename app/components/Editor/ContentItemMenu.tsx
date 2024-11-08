import { Editor } from "@tiptap/react";
import { FloatingMenu } from "@tiptap/react";
import { CiCirclePlus } from "react-icons/ci";
import { MdFormatListBulleted } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";

export type ContentItemMenuProps = {
  editor: Editor | null;
};

export const ContentItemMenu = ({ editor }: ContentItemMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <FloatingMenu
      pluginKey="ContentItemMenu"
      editor={editor}
      tippyOptions={{
        placement: "left",
      }}
    >
      <div className="flex items-center gap-0.5">
        <Popover.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Popover.Trigger asChild>
            <div className="flex items">
              <CiCirclePlus size={35} className="text-dark-600" />
            </div>
          </Popover.Trigger>
          <Popover.Content side="right" align="center" sideOffset={20}>
            <div className="flex min-w-[25rem] gap-4 ">
              <Popover.Close>
                <button
                  onClick={() =>
                    editor?.chain().focus().toggleBulletList().run()
                  }
                  className={editor?.isActive("bulletList") ? "is-active" : ""}
                >
                  <MdFormatListBulleted size={30} />
                </button>
              </Popover.Close>
              <Popover.Close>
                <button
                  onClick={() =>
                    editor?.chain().focus().toggleCodeBlock().run()
                  }
                  className={editor?.isActive("codeBlock") ? "is-active" : ""}
                >
                  <FaCode size={30} />
                </button>
              </Popover.Close>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    </FloatingMenu>
  );
};
