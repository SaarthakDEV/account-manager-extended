"use client";

import { useState } from "react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 -ml-2"
        aria-label="Toggle sidebar"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 4.5h14M3 10h14M3 15.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40" />
          <nav
            className="absolute left-0 top-0 h-full w-64 border-1 bg-white dark:bg-neutral-900 overflow-y-auto overflow-x-hidden"
            onClick={(e) => e.stopPropagation()}
          ></nav>
        </div>
      )}
    </>
  );
}
