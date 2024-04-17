import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onGuideTextClick = useCallback(() => {
    router.push("/guide");
  }, [router]);

  const onPlayNowTextClick = useCallback(() => {
    router.push("/play-now");
  }, [router]);

  const onExploreTextClick = useCallback(() => {
    router.push("/play-now");
  }, [router]);

  return (
    <div className={styles.home}>
      <main className={styles.image2Parent}>
        <img
          className={styles.image2Icon}
          alt=""
          src="/image-2@2x.png"
          data-scroll-to="image2"
        />
        <div className={styles.frameWrapper}>
          <nav className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.homeParent}>
                <b className={styles.home1} onClick={onHomeTextClick}>
                  Home
                </b>
                <div className={styles.aboutWrapper}>
                  <b className={styles.about} onClick={onAboutTextClick}>
                    About
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.guideWrapper}>
              <b className={styles.guide} onClick={onGuideTextClick}>
                Guide
              </b>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.playNow} onClick={onPlayNowTextClick}>
                Play Now
              </b>
            </div>
          </nav>
        </div>
        <h1 className={styles.introducingArmadaTacticalxContainer}>
          <p className={styles.introducing}>{`INTRODUCING `}</p>
          <p className={styles.armada}>{`ARmada `}</p>
          <p className={styles.tacticalx}>TacticalX</p>
        </h1>
        <div className={styles.frameDiv}>
          <button className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <b className={styles.explore} onClick={onExploreTextClick}>
              Explore
            </b>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
