"use client";
import { useId, useRef } from "react";
import { Search as SearchIcon } from "lucide-react";

type SearchProps = {
  label?: string;
};

export default function Search({ label }: SearchProps) {
  const ref = useRef<null | HTMLInputElement>(null);
  const id = useId();
  return (
    <div className="flex p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-150 focus-within:bg-slate-800 focus-within:outline-1 gap-2">
      <SearchIcon className="cursor-pointer" onClick={() => ref.current?.focus()} />
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          className="outline-none bg-transparent w-full"
          ref={ref}
          type="text"
          id={id}
        />
      </div>
    </div>
  );
}
