import {useState} from 'react';

import {Button, ThemeButton, ButtonSize, AppLink, AppLinkTheme} from 'shared';

import {classNames} from 'shared/lib/classNames/classNames';

import {RoutePaths} from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

import {ThemeSwitcher, LangSwitcher} from 'widgets';

import cls from './Sidebar.module.scss';

type SidebarProps = {
	className?: string;
};
const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prevState => !prevState);
	};

	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [
				className,
			])}
		>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={cls.btn}
				theme={ThemeButton.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.navigation}>
				<AppLink
					to={RoutePaths.main}
					className={cls['nav-item']}
					theme={AppLinkTheme.SECONDARY}
				>
					<MainIcon className={cls.icon} />
					<span className={cls.link}>Main</span>
				</AppLink>
				<AppLink
					to={RoutePaths.about}
					className={cls['nav-item']}
					theme={AppLinkTheme.SECONDARY}
				>
					<AboutIcon className={cls.icon} />
					<span className={cls.link}>About</span>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.lang} />
			</div>
		</div>
	);
};

export default Sidebar;
