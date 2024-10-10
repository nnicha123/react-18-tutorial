import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: Color;
  onClick: () => void;
}

type Color = "primary" | "secondary" | "success" | "danger" | "info";

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
