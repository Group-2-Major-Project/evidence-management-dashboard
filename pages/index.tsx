import Link from "next/link";
import styles from "../styles/pages/index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Welcome!</div>
      <div className={styles.buttonContainer}>
        <Link href="/login">
          <div className={styles.label}>Login</div>
        </Link>
        <Link href="/register">
          <div className={styles.label}>Register</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
