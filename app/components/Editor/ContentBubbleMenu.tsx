import {BubbleMenu} from '@tiptap/react'
import { PiTextT } from "react-icons/pi";
import { RxQuote } from "react-icons/rx";
import { FaBold,FaItalic,FaStrikethrough   } from "react-icons/fa";

import React from 'react'
function ContentBubbleMenu({editor}:any) {
  return (
    <>
    {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="bubble-menu bg-dark-800 text-white rounded-xl p-2 flex gap-3 items-center">
            <div className='flex gap-[5px] items-center'>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active text-[#DD105E]' : ''}
          >
          <PiTextT size={30} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active text-red-500' : ''}
          >
                    <PiTextT size={25} />

        </button>
        <button
                  onClick={() => editor?.chain().focus().toggleBlockquote().run()}
                  className={editor?.isActive('blockquote') ? 'is-active text-red-500' : ''}
                >
                  <RxQuote size={20}/>
                </button>
            </div>
            <div className='w-[2px] h-[20px] bg-dark-500'></div>
            <div className='flex gap-[5px] items-center'>

          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
            >
            <FaBold size={20}/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
            >
            <FaItalic size={20}/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
            >
            <FaStrikethrough size={20}/>
          </button>
              </div>
        </div>
      </BubbleMenu>}</>
  )
}

export default ContentBubbleMenu