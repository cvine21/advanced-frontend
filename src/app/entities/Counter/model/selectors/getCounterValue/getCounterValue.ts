import {CounterState} from 'app/entities/Counter';
import {createSelector} from '@reduxjs/toolkit';

import {getCounter} from './../getCounter/getCounter';

export const getCounterValue = createSelector(
	getCounter,
	(counter: CounterState) => counter.value,
);
