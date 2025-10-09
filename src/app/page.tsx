"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { UserProfile } from "@/components/user-profile";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <UserProfile />
      </main>
      <Footer />
    </div>
  );
}
