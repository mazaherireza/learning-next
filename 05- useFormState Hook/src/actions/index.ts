"use server";

import { prisma } from "@/lib/prisma";

import { redirect } from "next/navigation";

import type { FormState } from "@/types/form-state.type";

export async function createSnippetAction(
  formState: FormState,
  formData: FormData,
): Promise<void | FormState> {
  try {
    const title = formData.get("title");
    const code = formData.get("code") as string;

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer.",
      };
    }

    if (typeof code !== "string" || code.length < 3) {
      return {
        message: "Code must be longer.",
      };
    }

    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Something went wrong!",
      };
    }
  }

  redirect("/");
}

export async function editSnippetAction(
  id: number,
  code: string,
): Promise<void> {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippetAction(id: number): Promise<void> {
  await prisma.snippet.delete({
    where: { id },
  });

  redirect("/");
}
