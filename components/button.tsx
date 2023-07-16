import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "PRIMARY" | "SECONDARY";
}

export default function Button({ children, kind = "PRIMARY" }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${kind === "SECONDARY" && styles.secondary}`}
    >
      {children}
    </button>
  );
}
