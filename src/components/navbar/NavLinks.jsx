import NavLink from "./NavLink";
import styles from "./navlinks.module.css";
import { Button } from "@/components/ui/button";

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

  return (
    <>
      {links.map((link) => {
        return <NavLink title={link.title} path={link.path} key={link.title} />;
      })}
      {isAdmin && <NavLink title="admin" path="/admin" />}
      {session ? (
        <NavLink title="logout" path="/" />
      ) : (
        <>
          <NavLink title="signup" path="/signup" />
          <NavLink title="login" path="/login" />
        </>
      )}
    </>
  );
};
export default NavLinks;
