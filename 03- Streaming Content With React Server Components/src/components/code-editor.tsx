"use client";

import type { ReactNode } from "react";

import { useState } from "react";

import Editor from "@monaco-editor/react";

import type { SnippetType } from "@/types/snippet.type";

type Props ={ 
  snippet: SnippetType
}

export default function CodeEditorComponent({
snippet
}: Props): ReactNode {
  const [code, setcode] = useState<string>(snippet.code);

  const changeHandler = (value: string = "") => {
   setcode(value)
  };

  return (
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
  );
}
