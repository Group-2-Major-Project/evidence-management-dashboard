import styles from "../styles/pages/user-login.module.css";

const UserLogin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>User Login</div>
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

export default UserLogin;
