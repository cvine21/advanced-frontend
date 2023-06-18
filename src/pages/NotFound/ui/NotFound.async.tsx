import {lazy} from 'react';

const NotFoundAsync = lazy(async () => import('./NotFound'));

export default NotFoundAsync;
