import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Button, Input} from 'shared';
import {classNames} from 'shared/lib/classNames/classNames';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

const LoginForm = ({className}: LoginFormProps) => {
	const {t} = useTranslation();
	const [username, setUsername] = useState('');
	const [pswd, setPswd] = useState('');

	const onUsernameChange = (value: string) => {
		setUsername(value);
	};

	const onPswdChange = (value: string) => {
		setPswd(value);
	};

	return (
		<div className={classNames(cls['login-form'], {}, [className])}>
			<Input
				autofocus
				className={cls.input}
				placeholder={t('Введите логин')}
				value={username}
				onChange={onUsernameChange}
			/>
			<Input
				className={cls.input}
				placeholder={t('Введите пароль')}
				value={pswd}
				onChange={onPswdChange}
			/>
			<Button className={cls.btn}>{t('Войти')}</Button>
		</div>
	);
};

export default LoginForm;
