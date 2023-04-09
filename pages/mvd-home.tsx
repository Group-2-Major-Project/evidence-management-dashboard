import styles from "../styles/pages/mvd-home.module.css";

const mvdHome = () => {
  return (
    <div className={styles.container}>
      <form action="/" method="get">
        <input
          className={styles.input}
          name="vehicle-no"
          type="text"
          placeholder="Vehicle Number"
        />
        <button className={styles.submit} type="submit">
          View Image
        </button>
      </form>
    </div>
  );
};

export default mvdHome;
