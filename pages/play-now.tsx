import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./play-now.module.css";

const PlayNow: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onGuideTextClick = useCallback(() => {
    router.push("/guide");
  }, [router]);

  const onPlayNowTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.playNow}>
      <img
        className={styles.image4Icon}
        alt=""
        src="/image-4@2x.png"
        data-scroll-to="image4"
      />
      <img
        className={styles.playNowChild}
        loading="lazy"
        alt=""
        src="/rectangle-3@2x.png"
      />
      <b className={styles.home} onClick={onHomeTextClick}>
        Home
      </b>
      <b className={styles.about} onClick={onAboutTextClick}>
        About
      </b>
      <b className={styles.guide} onClick={onGuideTextClick}>
        Guide
      </b>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.playNow1} onClick={onPlayNowTextClick}>
          Play Now
        </b>
      </div>
      <h1 className={styles.checkOutThe}>Check out the QR code below</h1>
    </div>
  );
};

export default PlayNow;
