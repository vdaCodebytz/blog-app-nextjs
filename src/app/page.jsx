import { Button } from "@/components/ui/button";
import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className={styles.hero_section}>
        <div className={styles.hero_text}>
          <h4>30 DAYS FREE TRIAL</h4>
          <h1>Discover the Power of Life Coaching</h1>
          <h3>Learn more about our approach</h3>
          <div className={styles.hero_cta}>
            <Button className={styles.hero_cta_btn}>Get Started</Button>
            <Button variant="outline" className={styles.hero_cta_btn}>
              Explore
            </Button>
          </div>
        </div>
        <div className={styles.hero_imgContainer}>
          <Image
            src="/hero.png"
            alt="meditation"
            fill
            className={styles.hero_img}
          />
        </div>
      </section>
      <section className={styles.certs}>
        <h3>Trusted by life coaches around the world</h3>
        <div className={styles.certs_imgContainer}>
          <Image
            src="/cert_1.png"
            className={styles.certs_img}
            width={200}
            height={100}
          />
          <Image
            src="/cert_2.png"
            className={styles.certs_img}
            width={200}
            height={100}
          />
          <Image
            src="/cert_4.png"
            className={styles.certs_img}
            width={200}
            height={100}
          />
          <Image
            src="/cert_5.png"
            className={styles.certs_img}
            width={200}
            height={100}
          />
        </div>
      </section>
    </main>
  );
}
