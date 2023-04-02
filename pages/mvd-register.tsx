import styles from "../styles/pages/mvd-register.module.css";

const MVDRegister = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Register MVD</div>
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
        <input
          name="first"
          type="text"
          className={styles.input}
          placeholder="First Name"
        />
        <input
          name="last"
          type="text"
          className={styles.input}
          placeholder="Last Name"
        />
        <input
          name="district"
          className={styles.input}
          placeholder="District"
        />
        <input
          name="badge"
          type="text"
          className={styles.input}
          placeholder="Badge Number"
        />
        <label htmlFor="dob" className={"lg:text-xl"}>
          Date of birth
        </label>
        <input name="dob" type="date" className={styles.input} />
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MVDRegister;
