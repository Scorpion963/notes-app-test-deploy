import { Card } from "@/components/Card";
import { Modal, ModalContent } from "@/components/Modal";
import { db } from "@/db";
import { notesTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { id } from "zod/locales";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [note] = await db
    .select()
    .from(notesTable)
    .where(eq(notesTable.id, (await params).id));

  return (
    <Modal key={"jdiodsjoai"} defaultOpen>
      <ModalContent>
        <Card {...note} />
      </ModalContent>
    </Modal>
  );
}
