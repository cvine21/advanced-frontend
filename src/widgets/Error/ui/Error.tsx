import {useTranslation} from 'react-i18next';

import {Button} from 'shared';

import {classNames} from 'shared/lib/classNames/classNames';

import cls from './Error.module.scss';

type ErrorProps = {
	className?: string;
};

const Error = ({className}: ErrorProps) => {
	const {t} = useTranslation();

	const reloadPage = () => location.reload();

	return (
		<div className={classNames(cls.root, {}, [className])}>
			<h1>{t('Произошла непредвиденная ошибка')}</h1>
			<Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	);
};

export default Error;
