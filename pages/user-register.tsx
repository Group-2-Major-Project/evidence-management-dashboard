import styles from "../styles/pages/user-register.module.css";

const UserRegister = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Register User</div>
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
        <textarea
          name="address"
          className={styles.input}
          placeholder="Address"
        />
        <input
          name="licence"
          type="text"
          className={styles.input}
          placeholder="Licence Number"
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

export default UserRegister;
