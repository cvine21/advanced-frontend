import cls from './Navbar.module.scss';

import {classNames, AppLink, AppLinkTheme} from 'shared';

type NavbarProps = {
	className?: string;
};

export const Navbar = ({className}: NavbarProps) => (
	<div className={classNames(cls.navbar, {}, [className])}>
		<div className={cls.links}>
			<AppLink
				to={'/'}
				className={cls.mainLink}
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
