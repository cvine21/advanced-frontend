import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared';

import {classNames} from 'shared/lib/classNames/classNames';

import {ThemeButton} from 'shared';

import cls from './Navbar.module.scss';
import {LoginModal} from 'features/AuthByUsername';

type NavbarProps = {
	className?: string;
};

const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const onOpenCloseModal = useCallback(
		() => setIsOpen(prevState => !prevState),
		[],
	);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				className={cls['auth-btn']}
				theme={ThemeButton.CLEAR_INVERTED}
				onClick={onOpenCloseModal}
			>
				{t('Войти')}
			</Button>
			<LoginModal isOpen={isOpen} onClose={onOpenCloseModal} />
		</div>
	);
};

export default Navbar;
