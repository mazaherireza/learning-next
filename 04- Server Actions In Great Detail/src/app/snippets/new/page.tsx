import type { ReactNode } from "react";

import { prisma } from "@/lib/prisma";

import { redirect } from "next/navigation";

export default async function Page(): Promise<ReactNode> {
  const createSnippetHandler = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code
      },
    });

    console.log(snippet);

    redirect("/");
  };

  return (
    <form action={createSnippetHandler}>
      <h3 className="font-bold mbe-4">Create a snippet</h3>
      <div className="grid gap-4">
        <div className="flex gap-2">
          <label htmlFor="title">Title</label>
          <input className="w-full border rounded px-2 py-1" id="title" name="title" />
        </div>
        <div className="flex gap-2">
          <label htmlFor="code">Code</label>
          <textarea className="w-full border rounded px-2 py-1" id="code" name="code" />
        </div>

        <button className="cursor-pointer" type="submit">Create</button>
      </div>
    </form>
  );
}
