"use client";
import styles from "./accordion.module.scss";
import {
  Accordion as ReactAccordion,
  AccordionItem as ReactAccordionItem,
} from "@szhsin/react-accordion";
import { ReactElement, ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

type AccordionItemProps = {
  children: ReactElement[];
  initialEntered?: boolean;
};

const Accordion = ({ children }: { children: ReactNode }) => {
  return (
    <ReactAccordion
      transition
      transitionTimeout={250}
      className={styles.accordion}
    >
      {children}
    </ReactAccordion>
  );
};

const AccordionItem = ({ children, ...props }: AccordionItemProps) => {
  const [header, body] = children;
  return (
    <ReactAccordionItem
      className={styles.item}
      header={() => (
        <div className={styles.header}>
          <FiChevronDown />
          {header}
        </div>
      )}
      {...props}
    >
      <div className={styles.body}>{body}</div>
    </ReactAccordionItem>
  );
};

export { Accordion, AccordionItem };
