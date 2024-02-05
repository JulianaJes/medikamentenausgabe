"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1>hi</h1>
      <button
      onClick={()=>signIn("discord")}>Sign In</button>
    </div>
  );
}
