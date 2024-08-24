"use client";

import { useState, useEffect } from "react";

export function useKeyPress(inititalValue: string): string {
  const [userText, setUserText] = useState<string>("");

  const handleUserKeyPress = (e: KeyboardEvent) => {
    /*
      const { key, keyCode } = e;
  
      if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
        setUserText(`${userText}${key}`);
      }
        */
    const { key, code } = e;
    if (code === "Space" || (code.startsWith("Key") && key.length === 1))
      setUserText((prevText) => prevText + key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  return userText;
}
