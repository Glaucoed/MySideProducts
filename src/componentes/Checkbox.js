import React from "react";
import styles from "@/styles/checkbox.module.css";

export default function Checkbox({ name, title, register, value, setValue }) {
  return (
      <label className={styles.label} htmlFor={name}>
        <input
          className={styles.input}
          type="checkbox"
          id={name}
          {...register(`${name}`)}
          value={value}
          onChange={(event) => {
            const isChecked = event.target.checked;
            setValue(name, isChecked ? value : "");
          }}
        />
        {title}
      </label>
  );
}
