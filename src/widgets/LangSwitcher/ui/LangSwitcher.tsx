import {useTranslation} from 'react-i18next';
import cls from './LangSwitcher.module.scss';

import {classNames, Button, ThemeButton} from 'shared';

type LangSwitcherProps = {
	className?: string;
};

export const LangSwitcher = ({className}: LangSwitcherProps) => {
	const {t, i18n} = useTranslation();

	const onToggle = async () =>
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={onToggle}
		>
			{t('Язык')}
		</Button>
	);
};
