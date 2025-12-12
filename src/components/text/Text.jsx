import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { createElement } from "react";

const textStyles = cva("text-center", {
  variants: {
    size: {
      small: "text-xl",
      medium: "text-2xl",
      large: "text-4xl",
    },
    tone: {
      light: "text-grey-primary",
      dark: "text-grey-secondary",
      tint: "text-blue-200",
    },
  },
  defaultVariants: {
    size: "small",
    tone: "light",
  },
});

function Text({ as = "span", size, tone, className, children, ...props }) {
  return createElement(
    as,
    {
      className: clsx(textStyles({ size, tone }), className),
      ...props,
    },
    children
  );
}

export default Text;
