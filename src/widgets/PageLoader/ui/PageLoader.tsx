import {Loader} from 'shared';

import {classNames} from 'shared/lib/classNames/classNames';

import cls from './PageLoader.module.scss';

type PageLoaderProps = {
	className?: string;
};

const PageLoader = ({className}: PageLoaderProps) => (
	<div className={classNames(cls.root, {}, [className])}>
		<Loader />
	</div>
);

export default PageLoader;
