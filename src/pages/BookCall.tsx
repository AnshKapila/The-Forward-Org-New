import React from "react";
import { BookACall } from "../components/BookACall";

export default function BookCallPage() {
  return (
    <div className="bg-canvas min-h-screen text-ink pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <BookACall startWithForm={true} />
      </div>
    </div>
  );
}
