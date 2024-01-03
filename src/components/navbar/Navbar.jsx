import Link from "next/link";
import NavLinks from "./NavLinks";
import styles from "./navbar.module.css";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        LOGO
      </Link>
      <div className={styles.navlinks}>
        <NavLinks />
      </div>
      <div className={styles.menu}>
        <Sheet>
          <SheetTrigger>
            <IoMenu size={35} />
          </SheetTrigger>
          <SheetContent className="w-full">
            <div className={styles.menulinks}>
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default Navbar;
