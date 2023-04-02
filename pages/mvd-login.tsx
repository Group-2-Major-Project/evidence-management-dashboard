import styles from "../styles/pages/mvd-login.module.css";

const MVDLogin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>MVD Login</div>
      <form action="/" method="post">
        <input
          name="username"
          type="text"
          className={styles.input}
          autoFocus
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
          className={styles.input}
          placeholder="Password"
        />
        <a href="/forgot" className={styles.forgot}>
          Forgot Password?
        </a>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MVDLogin;
