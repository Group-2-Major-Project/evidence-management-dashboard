import Image from "next/image";
import styles from "../styles/components/title.module.css";

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/logo.png"
          alt="Logo of Kerala Police"
          width={284}
          height={274}
          priority
        />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Kerala Police</div>
        <div className={styles.subtitle}>Integrated e-Challan System</div>
      </div>
    </div>
  );
};

export default Title;
