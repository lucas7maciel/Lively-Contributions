"use client";

import { useEffect } from "react";

// Tipar
export function useClickOutside(refs: any, onClickOutside: any) {
  useEffect(() => {
    let trigger = true;

    function handleClickOutside(event: any) {
      refs.forEach((ref: any) => {
        if (ref.current && ref.current.contains(event.target)) {
          trigger = false;
        }
      });

      if (trigger) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside, refs]);
}
