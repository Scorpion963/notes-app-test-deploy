"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Modal, ModalContent, ModalTriggerButton } from "./Modal";
import { addNotes } from "@/actions/addNotes";
import { useId } from "react";

export const addNoteFormSchema = z.object({
  content: z.string().optional(),
  description: z.string().optional(),
  name: z.string().max(126),
});

export type addNoteFormSchemaType = z.infer<typeof addNoteFormSchema>;

export default function AddNoteForm() {
  const id = useId();
  const { control, register, handleSubmit, setError } = useForm({
    defaultValues: {
      content: "",
      description: "",
      name: "",
    },
    resolver: zodResolver(addNoteFormSchema),
  });

  async function onSubmit(data: addNoteFormSchemaType) {
    const res = await addNotes(data);
    if (!res.success) {
      console.log("Error happened");
      setError("root", {
        message: res.error.message,
      });
    } else {
      console.log("success");
    }

    return;
  }

  return (
    <Modal key={id} defaultOpen={false}>
      <ModalTriggerButton>Add Note</ModalTriggerButton>
      <ModalContent>
        <div className="rounded-lg w-128 p-4 bg-slate-800">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="flex py-1 focus:outline-1 focus:bg-slate-700 outline-white/50 px-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-150 focus-within:bg-slate-800 focus-within:outline-1 gap-2"
                  {...register("name")}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  className="flex py-1 focus:outline-1 focus:bg-slate-700 outline-white/50 px-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-150 focus-within:bg-slate-800 focus-within:outline-1 gap-2"
                  {...register("description")}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  className="flex py-1 focus:outline-1 focus:bg-slate-700 outline-white/50 px-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-150 focus-within:bg-slate-800 focus-within:outline-1 gap-2 resize-none h-32"
                  {...register("content")}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="self-end rounded-full bg-slate-800 px-4 py-2 hover:bg-slate-700 transition-all duration-150 cursor-pointer border border-white/70"
            >
              Add
            </button>
          </form>
        </div>
      </ModalContent>
    </Modal>
  );
}
