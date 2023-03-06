import Link from "next/link";
import styles from "../styles/components/NavbarDesktop.module.css";
import { NavbarPropsType } from "./Navbar";

const NavbarDesktop = (props: NavbarPropsType) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div
          className={props.active === "vehicle" ? styles.activeTab : styles.tab}
        >
          Vehicle Number
        </div>
      </Link>
      <Link href="/licence">
        <div
          className={props.active === "licence" ? styles.activeTab : styles.tab}
        >
          Licence Number
        </div>
      </Link>
      <Link href="/dl-penalty">
        <div
          className={
            props.active === "dl-penalty" ? styles.activeTab : styles.tab
          }
        >
          DL Penalty Points
        </div>
      </Link>
      <Link href="/complaints">
        <div
          className={
            props.active === "complaints" ? styles.activeTab : styles.tab
          }
        >
          Complaints
        </div>
      </Link>
      <Link href="/contact">
        <div
          className={props.active === "contact" ? styles.activeTab : styles.tab}
        >
          Contact Us
        </div>
      </Link>
      <Link href="/register">
        <div
          className={
            props.active === "register" ? styles.activeTab : styles.tab
          }
        >
          Register
        </div>
      </Link>
    </div>
  );
};

export default NavbarDesktop;
