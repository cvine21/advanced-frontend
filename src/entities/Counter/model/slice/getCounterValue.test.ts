import {counterReducer, CounterState} from 'entities/Counter';

import {decrement, increment} from './counterSlice';

describe('counterSlice', () => {
	it('should decrement the value', () => {
		const state: CounterState = {value: 10};

		expect(counterReducer(state, decrement())).toEqual({
			value: 9,
		});
	});

	it('should increment the value', () => {
		const state: CounterState = {value: 10};

		expect(counterReducer(state, increment())).toEqual({
			value: 11,
		});
	});

	it('should work with empty value', () => {
		expect(counterReducer(undefined, increment())).toEqual({
			value: 1,
		});
	});
});
