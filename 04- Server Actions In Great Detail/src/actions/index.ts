"use server";

import { prisma } from "@/lib/prisma";

import { redirect } from "next/navigation";

export async function editSnippetAction(id: number, code: string): Promise<void> {
  await prisma.snippet.update({
    where: { id },
    data: { code }
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippetAction(id: number): Promise<void> {
  await prisma.snippet.delete({
    where: { id }
  });

  redirect("/")
}