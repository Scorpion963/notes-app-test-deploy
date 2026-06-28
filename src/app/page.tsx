import AddNoteForm from "@/components/AddNoteForm";
import CardContainer from "@/components/CardContainer";
import Header from "@/components/Header";

export default function Main() {
  return (
    <div className="w-full max-w-[1200px] mx-auto pt-12">
      <Header />
      <AddNoteForm />
      <CardContainer />
    </div>
  );
}
