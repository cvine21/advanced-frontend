import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Input} from 'shared';

const MainPage = () => {
	const {t} = useTranslation();
	const [value, setValue] = useState('');

	const onChange = (value: string) => {
		setValue(value);
	};

	return (
		<div>
			{t('Главная страница')}
			<Input
				value={value}
				onChange={onChange}
				placeholder={t('Введите текст')}
			/>
		</div>
	);
};

export default MainPage;
