import { ButtonHTMLAttributes, FC } from "react";

import cls from "./Button.module.scss";

import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(cls.btn, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};