import styles from "../styles/pages/licence.module.css";

const Licence = () => {
  return (
    <div className={styles.container}>
      <form action="/" method="get">
        <p className={styles.inputLabel}>Enter Licence Number</p>
        <input
          className={styles.input}
          name="licence"
          type="text"
          minLength={16}
          maxLength={16}
          placeholder="Eg. KL07 20190004269"
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

export default Licence;
