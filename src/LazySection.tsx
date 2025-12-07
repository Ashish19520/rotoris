import { ReactNode, useEffect, useRef, useState } from "react";
interface LazySectionProps {
  children: ReactNode;
}

export default function LazySection({ children }:LazySectionProps) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px" }); // preload earlier

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{active ? children : null}</div>;
}
