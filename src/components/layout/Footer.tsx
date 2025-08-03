import React from "react";
import Link from "next/dist/client/link";

export default function Footer() {
  return (
    <footer className="px-6 py-4 border-t text-sm text-center">
      &copy; {new Date().getFullYear()}{" "}
      <Link
        href="https://www.linkedin.com/in/acquaah-emmanuel-kofi/"
        className="text-blue-500 border-b border-blue-500 hover:border-red-500 hover:text-red-500"
      >
        Acquaah Emmanuel Kofi
      </Link>
      . All rights reserved.
    </footer>
  );
}
