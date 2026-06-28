import { db } from "@/db";
import { notesTable } from "@/db/schema";
import { Card } from "./Card";

export default async function CardContainer() {
  const notes = await db.select().from(notesTable);

  return (
    <div className="flex gap-3">
      {notes.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
