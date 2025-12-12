import { cva } from "class-variance-authority";
import { clsx } from "clsx";

const buttonStyles = cva(
  "rounded-lg shadow-button hover:shadow-button-hover text-2xl text-grey-primary [background-image:var(--gradient-grey-primary)] hover:[background-image:var(--gradient-grey-primary-hover)]",
  {
    variants: {
      size: {
        default: "w-16 h-16",
        large: "w-35 h-16",
      },
      color: {
        primary: "bg-purple-primary",
        secondary: "bg-purple-secondary",
        neutral: "",
      },
    },
    defaultVariants: {
      size: "default",
      color: "primary",
    },
  }
);

function Button({ size, color, children, className, ...props }) {
  return (
    <button
      className={clsx(buttonStyles({ size, color }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
