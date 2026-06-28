"use server";

import { addNoteFormSchemaType } from "@/components/AddNoteForm";
import { db } from "@/db";
import { notesTable } from "@/db/schema";
import { error } from "console";
import { revalidatePath } from "next/cache";

type Success = {
  success: true;
};

type Failure = {
  success: false;
  error: {
    message: string;
    code: string;
  };
};

type ReturnType = Success | Failure;

export async function addNotes(
  data: addNoteFormSchemaType,
): Promise<ReturnType> {
  try {
    await db
      .insert(notesTable)
      .values({
        name: data.name,
        content: data.content,
        description: data.content,
      });
  } catch (e) {
    console.log(e);
    return {
      success: false,
      error: {
        message: "An unexpected error happened, try again later",
        code: "500",
      },
    };
  }
  revalidatePath("/")
  return { success: true };
}
