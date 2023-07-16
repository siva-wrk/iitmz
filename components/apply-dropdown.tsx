"use client";
import styles from "./apply-dropdown.module.scss";
import Link from "next/link";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import buttonStyles from "./button.module.scss";

export default function ApplyDropdown() {
  return (
    <div className={styles.menu}>
      <Menu
        menuButton={
          <MenuButton className={buttonStyles.button}>Apply Now</MenuButton>
        }
      >
        <MenuItem>
          <Link
            target="_blank"
            href="https://admissions.ge.iitm.ac.in/iitm-application-form-zanzibar"
          >
            BS in Data Science & AI
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            target="_blank"
            href="https://admissions.ge.iitm.ac.in/iitm-zanzibar-campus-application-form-m-tech"
          >
            MTech in Data Science & AI
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
