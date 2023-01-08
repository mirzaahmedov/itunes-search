import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./search_field.module.css";

const SearchField = ({
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode }) => {
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input {...props} className={[styles.input, props.className].join(" ")} />
    </label>
  );
};

export default SearchField;
