import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { motion } from "motion/react";

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
    <motion.button
      whileHover={{ scale: 1.05, transition: { duration: 0.015 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.03 } }}
      initial={{
        scale: 1.1,
      }}
      animate={{
        scale: 1,
        transition: { duration: 0.25 },
      }}
      className={clsx(buttonStyles({ size, color }), className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
