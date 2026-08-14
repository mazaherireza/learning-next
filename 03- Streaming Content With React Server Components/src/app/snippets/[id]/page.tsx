import type { ReactNode } from "react";

import Link from "next/link";

import { prisma } from "@/lib/prisma";

import { notFound } from "next/navigation";

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
      <div className="grid items-center gap-5 grid-cols-[1fr_auto_auto]">
        <div className="text-xl font-semibold">{snippet.title}</div>
        <Link className="text-sm" href={`/snippets/${snippet.id}/edit`}>
          Edit
        </Link>
        <button className="cursor-pointer text-sm px-2 py-1 rounded bg-red-200 text-red-800">
          Delete
        </button>
      </div>
      <pre className="p-2 bg-violet-100 rounded">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
