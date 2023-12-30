"use client";

import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ title, path }) => {
  const pathname = usePathname();
  return (
    <div
      className={`${styles.link} ${pathname === path && styles.active} ${
        (title === "login" || title === "logout") && styles.login
      } ${title === "signup" && styles.signup}`}
    >
      <Link href={path}>{title}</Link>
    </div>
  );
};
export default NavLink;
