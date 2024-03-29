import {classNames} from 'shared/lib/classNames/classNames';

import {Modal} from 'widgets';

import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => (
	<Modal
		className={classNames('', {}, [className])}
		isOpen={isOpen}
		onClose={onClose}
		lazy
	>
		<LoginForm />
	</Modal>
);

export default LoginModal;
