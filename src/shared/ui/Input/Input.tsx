import {type ChangeEvent, type InputHTMLAttributes, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

const Input = ({className, value, onChange, type = 'text'}: InputProps) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames('', {}, [className])}>
			<input type={type} value={value} onChange={onChangeHandler} />
		</div>
	);
};

export default memo(Input);
