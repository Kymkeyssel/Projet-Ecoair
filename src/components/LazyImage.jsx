import { useState, useEffect, useRef } from "react";

export default function LazyImage({
  src,
  alt,
  className = "",
  priority = false,
  placeholder = "bg-gray-200",
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (isInView && src) {
      const img = new Image();
      img.onload = () => {
        setTimeout(() => setIsLoaded(true), 50);
      };
      img.src = src;
    }
  }, [isInView, src]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${placeholder} ${className}`}
    >
      {isInView && (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-6 h-6 border-3 border-green-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            {...props}
          />
        </>
      )}
    </div>
  );
}