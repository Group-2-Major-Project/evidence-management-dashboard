import styles from "../styles/pages/index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <form action="/" method="get">
        <p className={styles.inputLabel}>Enter Vehicle Number</p>
        <input
          className={styles.input}
          name="vehicle"
          type="text"
          minLength={10}
          maxLength={10}
          placeholder="Eg. KL07AV5510"
          autoFocus
          required
        />
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
