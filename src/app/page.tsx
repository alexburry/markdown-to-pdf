import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <main className="flex flex-col flex-grow justify-center items-center m-5">
        <h1 className="text-3xl font-semibold">Markdown to PDF</h1>
        <div className="space-y-3 text-center">
          <h2>Convert your markdown text!</h2>
          <Textarea
            className="w-[720px] h-[700px] resize-none"
            placeholder="Start pasting..."
          />
          <Button className="w-40">Convert</Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.github.com/alexburry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Made by alexburry
        </a>
      </footer>
    </div>
  );
}
