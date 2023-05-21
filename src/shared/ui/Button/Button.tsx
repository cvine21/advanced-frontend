import {type ButtonHTMLAttributes, type FC} from 'react';

import cls from './Button.module.scss';

import {classNames} from 'shared/lib/classNames/classNames';

export enum ThemeButton {
	CLEAR = 'clear',
}

type ButtonProps = {
	className?: string;
	theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
	className,
	theme,
	children,
	...otherProps
}: ButtonProps) => (
	<button
		className={classNames(cls.button, {}, [className, cls[theme]])}
		{...otherProps}
	>
		{children}
	</button>
);
