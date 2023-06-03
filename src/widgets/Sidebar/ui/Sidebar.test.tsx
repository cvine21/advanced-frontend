import {fireEvent, screen} from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import Sidebar from './Sidebar';

describe('Button', () => {
	it('renders sidebar', () => {
		renderWithTranslation(<Sidebar />);

		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	it('collapses sidebar', () => {
		renderWithTranslation(<Sidebar />);

		const toggleBtn = screen.getByTestId('sidebar-toggle');

		expect(toggleBtn).toBeInTheDocument();

		fireEvent.click(toggleBtn);

		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
