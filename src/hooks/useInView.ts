import { useEffect, useRef, useState, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseInViewReturn<T extends HTMLElement> {
  ref: RefObject<T>;
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;

  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);

        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView, entry };
}
