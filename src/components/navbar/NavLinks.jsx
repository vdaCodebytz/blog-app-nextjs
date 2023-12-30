import NavLink from "./NavLink";
import styles from "./navlinks.module.css";

const links = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
  {
    title: "blog",
    path: "/blog",
  },
];
const NavLinks = () => {
  //   Temp Variables

  const isAdmin = true;
  const session = false;

  if (session) {
    if (isAdmin) {
      links.push({ title: "admin", path: "/admin" });
    }
    links.push({ title: "logout", path: "/logout" });
  } else {
    links.push(
      { title: "signup", path: "/signup" },
      { title: "login", path: "/login" }
    );
  }

  return (
    <div className={styles.links}>
      {links.map((link) => {
        return <NavLink title={link.title} path={link.path} key={link.title} />;
      })}
    </div>
  );
};
export default NavLinks;
