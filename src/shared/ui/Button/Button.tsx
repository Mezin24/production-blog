import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  SIZE_M = 'size_m',
  SIZE_L = 'size_l',
  SIZE_XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    square,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.SIZE_M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      type='button'
      {...otherProps}
    >
      {children}
    </button>
  );
};
