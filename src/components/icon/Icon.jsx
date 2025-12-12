import { clsx } from "clsx";

function Icon({ name, className, color = "inherit", size }) {
  return (
    <i
      className={clsx(`ri-${name}`, className)}
      style={{ fontSize: size, color }}
    ></i>
  );
}

export default Icon;
