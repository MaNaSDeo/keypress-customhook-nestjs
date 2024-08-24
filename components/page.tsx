"use client";

import styles from "./KeyPress.module.scss";
import { useKeyPress } from "@/hooks/useKeyPress";

function CustomeHook() {
  const userText = useKeyPress("");

  return (
    <section className={styles.landing}>
      <h1>Feel free to type on screen!</h1>
      <blockquote>{userText}</blockquote>
    </section>
  );
}

export default CustomeHook;
