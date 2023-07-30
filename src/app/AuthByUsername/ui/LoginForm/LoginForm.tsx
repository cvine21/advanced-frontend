import {useTranslation} from 'react-i18next';

import {Button, Input} from 'shared';
import {classNames} from 'shared/lib/classNames/classNames';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

const LoginForm = ({className}: LoginFormProps) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(cls['login-form'], {}, [className])}>
			<Input className={cls.input} />
			<Input type='password' className={cls.input} />
			<Button className={cls.btn}>{t('Войти')}</Button>
		</div>
	);
};

export default LoginForm;
