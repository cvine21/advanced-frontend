import {classNames} from 'shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

type LoaderProps = {
	className?: string;
};

const Loader = ({className}: LoaderProps) => (
	<div className={classNames(cls['lds-ellipsis'], {}, [className])}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default Loader;
