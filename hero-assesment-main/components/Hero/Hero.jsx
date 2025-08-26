// TODO: Build your Hero component here
// Requirements:
// - Accept props: src, alt, title, description, placeTitle, placeDescription
// - Use CSS Modules for styling
// - Implement scalable styles
// - Make it semantic and accessible

import styles from './Hero.module.css';
import { Figtree } from "next/font/google"

const figTree = Figtree({
  subsets: ["latin"],
  display: "swap",
})

// NOTE: Passing the CMS placement string as is – vertical then horizontal placement
export default function Hero({src, alt, title, description, placeTitle, placeDescription, theme}) {
  return (
    <section 
      className={`${styles.hero} ${figTree.className}`}
      style={{'--background-image': `url(${src})`,}}
      // NOTE: since given image was needed to assign background image, I used alt text for aria-label
      aria-label={alt}
    >
      <h1 
        style={placeTitle ? {"place-self": `${placeTitle}`} : {}}
        className={`${theme === "light" ? styles.light : styles.dark}`}
      >{title}</h1>
      <p 
        style={placeDescription ? {"place-self": `${placeDescription}`} : {}}
        className={`${theme === "light" ? styles.light : styles.dark}`}
      >{description}</p>
    </section>
  );
}
