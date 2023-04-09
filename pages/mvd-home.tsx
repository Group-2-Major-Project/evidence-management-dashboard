import styles from "../styles/pages/mvd-home.module.css";

const mvdHome = () => {
  return (
    <div className={styles.container}>
      <form action="/api/challan" method="get">
        <input
          className={styles.input}
          name="vehicleNo"
          type="text"
          placeholder="Vehicle Number"
        />
        <button className={styles.submit} type="submit">
          Issue Challan
        </button>
      </form>
    </div>
  );
};

export default mvdHome;
