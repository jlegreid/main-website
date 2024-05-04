"use client";

import { HighlightImage } from "./HighlightImage";
import valley from "public/img/featured/valley.jpg";
import cliff from "public/img/featured/cliff.jpg";
import falls from "public/img/featured/falls.jpg";
import ice from "public/img/featured/ice.jpg";
import lake from "public/img/featured/lake.jpg";
import lavender from "public/img/featured/lavender.jpg";
import magenta from "public/img/featured/magenta.jpg";
import meadow from "public/img/featured/meadow.jpg";
import road from "public/img/featured/road.jpg";
import sunrise from "public/img/featured/sunrise.jpg";
import trees from "public/img/featured/trees.jpg";

const images = [
  { src: valley, alt: "Valley" },
  { src: cliff, alt: "Cliff" },
  { src: falls, alt: "Falls" },
  { src: ice, alt: "Ice" },
  { src: lake, alt: "Lake" },
  { src: lavender, alt: "Lavender" },
  { src: magenta, alt: "Magenta" },
  { src: meadow, alt: "Meadow" },
  { src: road, alt: "Road" },
  { src: sunrise, alt: "Sunrise" },
  { src: trees, alt: "Trees" },
];
export function ImageGallery() {
  return (
    <div>
      {images.map((image, index) => (
        <HighlightImage
          key={image.alt + index}
          src={image.src}
          alt={image.alt}
          width={600}
        />
      ))}
    </div>
  );
}
