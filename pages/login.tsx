import Link from "next/link";
import styles from "../styles/pages/login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Login</div>
      <div className={styles.buttonContainer}>
        <Link href="/user-login">
          <div className={styles.label}>User</div>
        </Link>
        <Link href="/mvd-login">
          <div className={styles.label}>MVD</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
