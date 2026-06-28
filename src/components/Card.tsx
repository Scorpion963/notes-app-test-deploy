"use client";
import { notesTable } from "@/db/schema";
import { Modal, ModalContent, ModalTriggerButton, useModal } from "./Modal";
import { useId } from "react";

export function Card(data: typeof notesTable.$inferSelect) {
  const id = useId();
  return (
    <Modal key={id}>
      <CardPreview {...data} />
      <ModalContent>
        <CardContent {...data} />
      </ModalContent>
    </Modal>
  );
}

export function CardPreview(data: typeof notesTable.$inferSelect) {
  const { setIsOpen } = useModal();

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="rounded-lg size-44 bg-slate-800 text-white cursor-pointer"
    >
      <h3>{data.name}</h3>
      <p>{data.content}</p>
      <div className="flex justify-between items-center">
        <div>{data.updatedAt !== data.createdAt && "Edited"}</div>
        <div>{data.createdAt!.toISOString()}</div>
      </div>
    </div>
  );
}

export function CardContent(data: typeof notesTable.$inferSelect) {
  return (
    <div className="rounded-lg size-112 bg-slate-800 text-white cursor-pointer">
      <h3>{data.name}</h3>
      <p>{data.content}</p>
      <div className="flex justify-between items-center">
        <div>{data.updatedAt !== data.createdAt && "Edited"}</div>
        <div>{data.createdAt!.toISOString()}</div>
      </div>
    </div>
  );
}
