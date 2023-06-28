import {fireEvent, screen} from '@testing-library/react';
import componentRender from 'shared/config/tests/componentRender/componentRender';

import Sidebar from './Sidebar';

describe('Button', () => {
	it('renders sidebar', () => {
		componentRender(<Sidebar />);

		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	it('collapses sidebar', () => {
		componentRender(<Sidebar />);

		const toggleBtn = screen.getByTestId('sidebar-toggle');

		expect(toggleBtn).toBeInTheDocument();

		fireEvent.click(toggleBtn);

		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
