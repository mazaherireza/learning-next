import type { ReactNode } from "react";

import { prisma } from "@/lib/prisma"

export default async function Page(): Promise<ReactNode> {
  const response = await prisma.snippet.create({
    data: {
      title: "The First",
      code: "const x = 0"
    }
  })

  console.log(res);

  return <div>New Snippet</div>;
}
