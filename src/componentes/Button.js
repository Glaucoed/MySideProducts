import styles from "@/styles/button.module.css";

export default function Button({ value }) {
  return (
    <button className={styles.button}>{value}</button>
  )
}
