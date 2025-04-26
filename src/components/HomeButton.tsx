"use client";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href="#hero">
      <div className="h-10 w-10 bg-emerald-400 hover:bg-emerald-300 rounded-full flex items-center justify-center transition hover:scale-110">
        <HomeIcon className="h-6 w-6 text-black" />
      </div>
    </Link>
  );
}
