import React from "react";
import styles from "@/styles/input.module.css";

export default function Checkbox({ name, title, register, value, setValue }) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        <input
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
    </div>
  );
}
