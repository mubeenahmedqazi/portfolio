"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  disabled?: boolean;
}

export function useTypewriter(words: string[], options: UseTypewriterOptions = {}) {
  const { typingSpeed = 70, deletingSpeed = 40, pauseDuration = 1800, disabled = false } = options;

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(disabled ? words[0] ?? "" : "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (disabled || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && text === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, disabled]);

  return text;
}
