import NavLinks from "./NavLinks";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div>
        <NavLinks />
      </div>
    </div>
  );
};
export default Navbar;
