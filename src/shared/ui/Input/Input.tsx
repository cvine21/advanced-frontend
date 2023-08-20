import {
	type ChangeEvent,
	type InputHTMLAttributes,
	memo,
	useState,
	useEffect,
	useRef,
} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	autofocus?: boolean;
}

const Input = ({
	className,
	onChange,
	placeholder,
	value,
	autofocus = false,
	...props
}: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

	const ref = useRef<HTMLInputElement>();

	useEffect(() => {
		if (autofocus) {
			ref.current.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setCaretPosition(e.target.value.length);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart);
	};

	return (
		<div className={classNames(cls['input-wrapper'], {}, [className])}>
			{placeholder && (
				<div className={cls.placeholder}>{`${placeholder} >`}</div>
			)}
			<div className={cls['caret-wrapper']}>
				<input
					className={cls.input}
					value={value}
					onChange={onChangeHandler}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					ref={ref}
					{...props}
				/>
				{isFocused && (
					<span
						className={cls.caret}
						style={{left: `${caretPosition * 9}px`}}
					/>
				)}
			</div>
		</div>
	);
};

export default memo(Input);
