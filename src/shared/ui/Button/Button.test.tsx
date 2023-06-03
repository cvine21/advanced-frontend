import {render, screen} from '@testing-library/react';

import {Button} from 'shared';

import {ThemeButton} from './Button';

describe('Button', () => {
	it('renders TEST', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	it('renders button with clear class', () => {
		render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
	});
});
