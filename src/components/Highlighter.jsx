"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  padding = 2,
  multiline = true,
  loopDelay = 2000, // loop every 2s by default
}) {
  const elementRef = useRef(null);
  const annotationRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      annotationRef.current = annotate(element, {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        padding,
        multiline,
      });

      // Show first time
      annotationRef.current.show();

      // Loop effect
      const interval = setInterval(() => {
        annotationRef.current.hide();
        setTimeout(() => {
          annotationRef.current.show();
        }, 100); // small delay before redrawing
      }, loopDelay);

      return () => clearInterval(interval);
    }
  }, [
    action,
    color,
    strokeWidth,
    animationDuration,
    padding,
    multiline,
    loopDelay,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
