"use client";

import type { ReactNode } from "react";

import { useFormState } from "react-dom";

import { createSnippetAction } from "@/actions";

export default function Papg(): ReactNode {
  const [formState, action] = useFormState(createSnippetAction, {
    message: "",
  });

  return (
    <form action={action}>
      <h3 className="font-bold mbe-4">Create a snippet</h3>
      <div className="grid gap-4">
        <div className="flex gap-2">
          <label htmlFor="title">Title</label>
          <input
            className="w-full border rounded px-2 py-1"
            id="title"
            name="title"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="code">Code</label>
          <textarea
            className="w-full border rounded px-2 py-1"
            id="code"
            name="code"
          />
        </div>
        {
          formState.message && <div className="font-bold text-red-600">{formState.message}</div>
        }
        <button className="cursor-pointer" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
