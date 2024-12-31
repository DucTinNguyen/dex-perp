"use client";
import { SidebarProvider } from "@/providers/side-bar.provider";
import Base from "@/components/templates/Base";
import { ScrollTop } from "@/components/scrollTop/ScrollTop";

export default function Home() {

  return (
    <div className="text-gray-600 font-satoshi">
      <Base/>
      <ScrollTop/>
    </div>
  );
}
