import React from "react";
import styles from "@/styles/input.module.css";

export default function Input({
  placeholder,
  name,
  title,
  type,
  handleOnChange,
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {title}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={handleOnChange}
      />
    </div>
  );
}
