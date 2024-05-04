"use client";

import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`flex px-7 py-5 fixed top-0 left-0 right-0 shadow-md shadow-neutral-700 font-black content-center text-white ${
        isHome ? "bg-transparent" : "bg-primary-dark"
      }`}
    >
      <div className="flex flex-col w-full leading-5">
        <span>NATURAL</span>
        <span>COLLECTION</span>
      </div>
      <ul className="flex justify-end gap-5 font-bold content-center">
        <li className="flex content-center flex-wrap">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="flex content-center flex-wrap">
          <a href="/about">About</a>
        </li>
        <li className="flex content-center flex-wrap">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
