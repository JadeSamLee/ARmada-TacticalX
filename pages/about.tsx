import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./about.module.css";

const About: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGuideTextClick = useCallback(() => {
    router.push("/guide");
  }, [router]);

  const onPlayNowTextClick = useCallback(() => {
    router.push("/play-now");
  }, [router]);

  return (
    <div className={styles.about}>
      <main className={styles.image5Parent}>
        <img
          className={styles.image5Icon}
          alt=""
          src="/image-5@2x.png"
          data-scroll-to="image5"
        />
        <b className={styles.home} onClick={onHomeTextClick}>
          Home
        </b>
        <b className={styles.about1} onClick={onAboutTextClick}>
          About
        </b>
        <b className={styles.guide} onClick={onGuideTextClick}>
          Guide
        </b>
        <div className={styles.fRAME}>
          <div className={styles.library} />
          <b className={styles.playNow} onClick={onPlayNowTextClick}>
            Play Now
          </b>
        </div>
      </main>
    </div>
  );
};

export default About;
