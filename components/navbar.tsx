import styles from "./navbar.module.scss";
import navMenu from "@/data/navmenu";
import MenuItem from "./menu-item";

type NavbarProps = {
  navToggle: boolean;
};

export default function Navbar({ navToggle }: NavbarProps) {
  return (
    <nav className={`${styles.nav} ${navToggle ? styles.nav_show : ``}`}>
      <ul>
        {navMenu.map((navItem) => {
          const depthLevel = 0;
          return <MenuItem item={navItem} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
}
