"use client"

import Animation from "@/components/Animation";
import Keyframes from "@/components/Keyframes";
import Variants from "@/components/Variants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Animation/>
      <Keyframes/>
      <Variants/>
    </main>
  )
}
