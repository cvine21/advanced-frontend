import cls from './Navbar.module.scss';

import {classNames} from 'shared/lib/classNames/classNames';

type NavbarProps = {
	className?: string;
};

const Navbar = ({className}: NavbarProps) => (
	<div className={classNames(cls.navbar, {}, [className])}>
		<div className={cls.links}></div>
	</div>
);

export default Navbar;
