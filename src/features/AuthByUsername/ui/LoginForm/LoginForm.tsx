import {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import {
	setPassword,
	setUsername,
} from 'features/AuthByUsername/model/slice/loginSlice';

import {Button, Input, ThemeButton} from 'shared';
import {classNames} from 'shared/lib/classNames/classNames';

import cls from './LoginForm.module.scss';
import {getLoginState} from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
	className?: string;
}

const LoginForm = memo(({className}: LoginFormProps) => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const {username, password} = useSelector(getLoginState);

	const onUsernameChange = useCallback(
		(value: string) => {
			dispatch(setUsername(value));
		},
		[dispatch],
	);

	const onPswdChange = useCallback(
		(value: string) => {
			dispatch(setPassword(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(() => {}, []);

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
				value={password}
				onChange={onPswdChange}
			/>
			<Button
				theme={ThemeButton.OUTLINE}
				className={cls.btn}
				onClick={onLoginClick}
			>
				{t('Войти')}
			</Button>
		</div>
	);
});

export default LoginForm;
