import { useState, useEffect, useCallback } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

    const optimizedResize = () => {
      if (resizeTimeout) return;
      resizeTimeout = setTimeout(() => {
        handleResize();
        resizeTimeout = null;
      }, 100);
    };

    window.addEventListener("resize", optimizedResize);

    return () => {
      window.removeEventListener("resize", optimizedResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [handleResize]);

  return width;
};
