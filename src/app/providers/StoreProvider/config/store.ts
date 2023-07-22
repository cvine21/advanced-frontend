import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from 'app/entities/Counter';

import type {StateSchema} from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) =>
	configureStore<StateSchema>({
		reducer: {counter: counterReducer},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
