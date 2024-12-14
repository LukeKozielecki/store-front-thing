import React from "react";
import Dashboard from "@/app/components/Dashboard";

export default function Home() {
  return (
      <div
          className={"grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 gap-16"}
      >
          <Dashboard/>
      </div>
  );
}
