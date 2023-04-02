import styles from "../styles/pages/forgot.module.css";

const Forgot = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Reset Password</div>
      <form action="/" method="get">
        <input
          name="username"
          placeholder="Username"
          type="text"
          className={styles.input}
        />
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forgot;
