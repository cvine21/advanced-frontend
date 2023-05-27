import cls from './Navbar.module.scss';

import {AppLink, AppLinkTheme} from 'shared';

import {classNames} from 'shared/lib/classNames/classNames';

type NavbarProps = {
	className?: string;
};

export const Navbar = ({className}: NavbarProps) => (
	<div className={classNames(cls.navbar, {}, [className])}>
		<div className={cls.links}>
			<AppLink
				to={'/'}
				className={cls['main-link']}
				theme={AppLinkTheme.SECONDARY}
			>
				Main
			</AppLink>
			<AppLink to={'/about'} theme={AppLinkTheme.RED}>
				About
			</AppLink>
		</div>
	</div>
);
