import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./guide.module.css";

const Guide: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onGuideTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='playingField1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPlayNowTextClick = useCallback(() => {
    router.push("/play-now");
  }, [router]);

  return (
    <div className={styles.guide}>
      <main className={styles.playingField1Parent}>
        <img
          className={styles.playingField1}
          alt=""
          src="/playing-field-1@2x.png"
          data-scroll-to="playingField1"
        />
        <section className={styles.frameChild} />
        <h1 className={styles.guidelines}>Guidelines</h1>
        <section className={styles.installArmadaTacticalxContainer}>
          <p className={styles.installArmadaTacticalx}>
            1. Install ARmada TacticalX app on your device and explore training
            modules.
          </p>
          <p className={styles.navigateUsingIntuitive}>
            2. Navigate using intuitive gestures and engage with virtual
            environments.
          </p>
          <p className={styles.adaptToAi}>
            3. Adapt to AI adversaries by observing their tactics and adjusting
            strategies.
          </p>
          <p className={styles.payAttentionTo}>
            4. Pay attention to feedback for performance improvement during
            training.
          </p>
          <p className={styles.prioritizeSafetyAnd}>
            5. Prioritize safety and provide feedback for continuous
            enhancement.
          </p>
        </section>
        <div className={styles.frameItem} />
        <b className={styles.home} onClick={onHomeTextClick}>
          Home
        </b>
        <b className={styles.about} onClick={onAboutTextClick}>
          About
        </b>
        <b className={styles.guide1} onClick={onGuideTextClick}>
          Guide
        </b>
        <b className={styles.playNow} onClick={onPlayNowTextClick}>
          Play Now
        </b>
      </main>
    </div>
  );
};

export default Guide;
