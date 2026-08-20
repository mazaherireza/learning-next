import type { ReactNode } from "react";

import { prisma } from "@/lib/prisma";

import Link from "next/link";

export default async function Page(): Promise<ReactNode> {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">Snippets</h3>
        <Link className="cursor-pointer text-sm" href="/snippets/new">New</Link>
      </div>
      <ul className="grid gap-2">
        {snippets.map((snippet) => (
          <li
            className="flex justify-between px-2 py-1 border rounded"
            key={snippet.id}
          >
            <div className="font-semibold">{snippet.title}</div>
            <Link className="text-sm"  href={`/snippets/${snippet.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
