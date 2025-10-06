"use client";

import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function ReadAloudButton({
  textToRead,
}: {
  textToRead: string;
}) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      setIsSupported(true);
    }

    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleReadAloud = () => {
    if (!isSupported) {
      alert("Text-to-Speech is not supported in this browser.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToRead);

    utterance.lang = "en-US";

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  if (!isSupported) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleReadAloud}
      className="gap-1 p-0 h-auto text-sm md:text-base text-muted-foreground hover:bg-transparent hover:text-red-500 transition-colors"
    >
      <Volume2 className="w-4 h-4" />
      {isSpeaking ? "Stop Reading" : "Read Article Aloud"}
    </Button>
  );
}
