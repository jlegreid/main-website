"use client";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

type HighlightImageProps = {
  readonly src: StaticImageData;
  readonly alt: string;
  readonly width: number;
  readonly priority?: boolean;
};

export function HighlightImage({
  src,
  alt,
  width,
  priority,
}: HighlightImageProps) {
  const windowHeight = window.innerHeight;
  const treshold =
    windowHeight - src.height > 0 ? 1 : windowHeight / src.height;
  const calcThreshold = treshold - 0.1;

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  return (
    <div>
      <Image
        ref={ref}
        src={src}
        alt="Valley"
        priority={priority}
        className={`${
          inView ? "mt-1 opacity-100 scale-105 z-20 shadow-lg" : "opacity-50"
        } rounded-md w-dvw transition-all duration-500 ease-in-out relative z-10 m-10`}
      />
    </div>
  );
}
