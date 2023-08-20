import {MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {useTheme} from 'app/providers/ThemeProvider';

import {classNames} from 'shared/lib/classNames/classNames';

import {Portal} from 'widgets/Portal';

import type {ReactNode} from 'react';

import cls from './Modal.module.scss';

type ModalProps = {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
};

const ANIMATION_DELAY = 300;

const Modal = ({className, children, isOpen, onClose, lazy}: ModalProps) => {
	const {theme} = useTheme();
	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

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
		setIsMounted(isOpen);
	}, [isOpen]);

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
		<>
			{(!lazy || isMounted) && (
				<Portal>
					<div
						className={classNames(cls.modal, mods, [
							className,
							theme,
							'app-modal',
						])}
					>
						<div className={cls.overlay} onClick={closeHandler}>
							<div className={cls.content} onClick={onCLickContent}>
								{children}
							</div>
						</div>
					</div>
				</Portal>
			)}
		</>
	);
};

export default Modal;
