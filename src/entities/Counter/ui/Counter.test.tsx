import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import componentRender from 'shared/config/tests/componentRender/componentRender';
import Counter from './Counter';

describe('Counter', () => {
	it('should render Counter with initialState', () => {
		componentRender(<Counter />, {initialState: {counter: {value: 10}}});

		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
	});

	it('should decrement the value', () => {
		componentRender(<Counter />, {initialState: {counter: {value: 10}}});

		userEvent.click(screen.getByTestId('decr-btn'));

		expect(screen.getByTestId('value-title')).toHaveTextContent('9');
	});

	it('should increment the value', () => {
		componentRender(<Counter />, {initialState: {counter: {value: 10}}});

		userEvent.click(screen.getByTestId('incr-btn'));

		expect(screen.getByTestId('value-title')).toHaveTextContent('11');
	});
});
