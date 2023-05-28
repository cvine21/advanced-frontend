import {render, screen} from '@testing-library/react';

import {Button} from 'shared';

describe('Button', () => {
	it('renders with correct text', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});
});
