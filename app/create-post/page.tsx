"use client";
import { useState } from "react";
import BlockEditor from "./BlockEditor";
import "./editor.css";
export default function AddText() {
  return (
    <div className="flex justify-center mt-20">
      <BlockEditor />
    </div>
  );
}
