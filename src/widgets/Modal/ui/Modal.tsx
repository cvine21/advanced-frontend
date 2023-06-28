import {
	MouseEvent,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';

type ModalProps = {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
};

const ANIMATION_DELAY = 300;

const Modal = ({className, children, isOpen, onClose}: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);

	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler],
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const onCLickContent = (e: MouseEvent) => e.stopPropagation();

	const mods = {
		[cls.opened]: isOpen,
		[cls.closing]: isClosing,
	};

	return (
		<div className={classNames(cls.modal, mods, [className])}>
			<div className={cls.overlay} onClick={closeHandler}>
				<div className={cls.content} onClick={onCLickContent}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
