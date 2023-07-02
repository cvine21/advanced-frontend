import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared';

import {classNames} from 'shared/lib/classNames/classNames';

import {ThemeButton} from 'shared';

import {Modal} from 'widgets';

import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};

const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const onToggleModal = useCallback(
		() => setIsOpen(prevState => !prevState),
		[],
	);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				className={cls['auth-btn']}
				theme={ThemeButton.CLEAR_INVERTED}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>
			<Modal isOpen={isOpen} onClose={onToggleModal}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
				temporibus harum corporis doloremque libero accusantium et perferendis
				in ad commodi?
			</Modal>
		</div>
	);
};

export default Navbar;
