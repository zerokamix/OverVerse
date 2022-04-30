import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OVERVERSE LABS | Blockchain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Parallax pages={2}>
          <ParallaxLayer style={{ textAlign: "center" }} speed={1}>
            <Typography style={{ fontFamily: "Titillium Web" }} variant="h1">
              OverVerse
            </Typography>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
}
