import {useTranslation} from 'react-i18next';

import cls from './NotFound.module.scss';

import {classNames} from 'shared/lib/classNames/classNames';

interface NotFoundProps {
	className?: string;
}

const NotFound = ({className}: NotFoundProps) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(cls['not-found'], {}, [className])}>
			{t('Страница не найдена')}
		</div>
	);
};

export default NotFound;
