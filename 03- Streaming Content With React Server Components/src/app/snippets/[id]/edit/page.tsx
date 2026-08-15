import type { ReactNode } from "react";

import Link from "next/link";

import { prisma } from "@/lib/prisma";

import { notFound } from "next/navigation";

import CodeEditorComponent from "@/components/code-editor";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props): Promise<ReactNode> {
  await new Promise((r) => setTimeout(r, 2000));

  const id = (await params).id;

  const snippet = await prisma.snippet.findFirst({
    where: { id: +id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="grid gap-4">
      <div className="text-lg font-semibold">
        Editing snippet with title: {snippet.title}
      </div>
      {/* <pre className="p-2 bg-violet-100 rounded">
        <code>{snippet.code}</code>
      </pre> */}
      <CodeEditorComponent snippet={snippet} />
      <button className="cursor-pointer font-semibold text-sm">Save</button>
    </div>
  );
}
