import {type FC} from 'react';
import {Link, type LinkProps} from 'react-router-dom';

import cls from './AppLink.module.scss';

import {classNames} from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red',
}

type AppLinkProps = {
	className?: string;
	theme: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = ({
	className,
	children,
	to,
	theme = AppLinkTheme.PRIMARY,
	...otherProps
}) => (
	<Link
		to={to}
		className={classNames(cls.AppLink, {}, [className, cls[theme]])}
		{...otherProps}
	>
		{children}
	</Link>
);
