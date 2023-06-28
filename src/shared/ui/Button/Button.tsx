import {type ButtonHTMLAttributes, type FC} from 'react';

import cls from './Button.module.scss';

import {classNames} from 'shared/lib/classNames/classNames';

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
	M = 'size-m',
	L = 'size-l',
	XL = 'size-xl',
}

type ButtonProps = {
	className?: string;
	theme?: ThemeButton;
	square?: boolean;
	size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
	className,
	theme,
	children,
	square,
	size,
	...otherProps
}: ButtonProps) => (
	<button
		className={classNames(cls.button, {[cls.square]: square}, [
			className,
			cls[theme],
			cls[size],
		])}
		{...otherProps}
	>
		{children}
	</button>
);

export default Button;
