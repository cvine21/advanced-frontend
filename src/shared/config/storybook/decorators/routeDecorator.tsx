import {Decorator} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';

import 'app/styles/index.scss';

const routeDecorator: Decorator = Story => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
);

export default routeDecorator;
