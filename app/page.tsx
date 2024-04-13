"use client";

import styles from "./page.module.css";
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

import { HighlightImage } from "./components/HighlightImage";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="mb-10 text-3xl">Welcome to the Natural Collection</h1>
      <div>
        <HighlightImage src={valley} alt="Valley" width={600} />
        <HighlightImage src={cliff} alt="Cliff" width={600} />
        <HighlightImage src={falls} alt="Falls" width={600} />
        <HighlightImage src={ice} alt="Ice" width={600} />
        <HighlightImage src={lake} alt="Lake" width={600} />
        <HighlightImage src={lavender} alt="Lavender" width={600} />
        <HighlightImage src={magenta} alt="Magenta" width={600} />
        <HighlightImage src={meadow} alt="Meadow" width={600} />
        <HighlightImage src={road} alt="Road" width={600} />
        <HighlightImage src={sunrise} alt="Sunrise" width={600} />
        <HighlightImage src={trees} alt="Trees" width={600} />
      </div>
    </main>
  );
}
