import {useState} from 'react';

import {Button} from 'shared';

import {classNames} from 'shared/lib/classNames/classNames';

import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';

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
			<Button data-testid='sidebar-toggle' onClick={onToggle}>
				Toggle
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};

export default Sidebar;
