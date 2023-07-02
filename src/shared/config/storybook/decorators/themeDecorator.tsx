import {Decorator} from '@storybook/react';

import 'app/styles/index.scss';

import {Theme} from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';

const themeDecorator = (theme: Theme) => {
	const decorator: Decorator = Story => {
		document.body.className = theme;

		return (
			<div className={`app ${theme}`}>
				<Story />
			</div>
		);
	};

	return decorator;
};

export default themeDecorator;
