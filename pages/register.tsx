import Link from "next/link";
import styles from "../styles/pages/register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Register</div>
      <div className={styles.buttonContainer}>
        <Link href="/user-Register">
          <div className={styles.label}>User</div>
        </Link>
        <Link href="/mvd-Register">
          <div className={styles.label}>MVD</div>
        </Link>
      </div>
    </div>
  );
};

export default Register;
