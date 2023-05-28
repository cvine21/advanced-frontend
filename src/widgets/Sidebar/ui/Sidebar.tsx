import {useState} from 'react';

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
			className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [
				className,
			])}
		>
			<button onClick={onToggle}>Toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};

export default Sidebar;
