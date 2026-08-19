"use client";

import type { ReactNode } from "react";

import { useState } from "react";

import Editor from "@monaco-editor/react";

import type { SnippetType } from "@/types/snippet.type";

import { editSnippetAction } from "@/actions";

type Props = {
  snippet: SnippetType;
};

export default function SnippetEditFormComponent({
  snippet,
}: Props): ReactNode {
  const [code, setcode] = useState<string>(snippet.code);

  const changeHandler = (value: string = "") => {
    setcode(value);
  };

  const actionHandler = editSnippetAction.bind(null, snippet.id!, code);

  return (
    <form className="grid gap-4" action={actionHandler}>
      <Editor
        height="60vh" 
        defaultLanguage="typescript"
        defaultValue={code}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
        }}
        onChange={changeHandler}
      />
      <button className="cursor-pointer font-semibold text-sm">Save</button>
    </form>
  );
}
