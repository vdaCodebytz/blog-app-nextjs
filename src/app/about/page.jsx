import styles from "./about.module.css";
import Image from "next/image";
const LoginPage = () => {
  return (
    <main>
      <section className={styles.hero_section}>
        <div className={styles.hero_text}>
          <h1>Our Mission</h1>
          <p>
            At LifeCoach, we are dedicated to helping you achieve your goals and
            live a fulfilling life. Our experienced team of life coaches is here
            to guide and support you every step of the way. Join our community
            and unlock your full potential today!
          </p>
          <h3>Join us Now !</h3>
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
    </main>
  );
};
export default LoginPage;
