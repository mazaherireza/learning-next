import type { ReactNode } from "react";

import Link from "next/link";

import { prisma } from "@/lib/prisma";

import { notFound } from "next/navigation";

import SnippetEditFormComponent from "@/components/snippet-edit-form.component";

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
      <SnippetEditFormComponent snippet={snippet} />
    </div>
  );
}
