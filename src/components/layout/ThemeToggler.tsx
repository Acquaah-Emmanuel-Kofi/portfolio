"use client";

import { useCallback, useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeToggler() {
  const [globalTheme, setGlobalTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("globalTheme") as
        | "light"
        | "dark"
        | null;
      setGlobalTheme(storedTheme || "light");
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.classList.toggle("dark", globalTheme === "dark");
    localStorage.setItem("globalTheme", globalTheme);
  }, [globalTheme]);

  const toggleDarkTheme = useCallback(() => {
    setGlobalTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <button
      type="button"
      onClick={toggleDarkTheme}
      aria-label="Toggle Theme"
      className="text-gray-350"
    >
      {globalTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
