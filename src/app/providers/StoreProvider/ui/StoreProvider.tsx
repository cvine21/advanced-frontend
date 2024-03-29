import {Provider} from 'react-redux';

import {createReduxStore} from '../config/store';

import type {ReactNode} from 'react';
import type {StateSchema} from '../config/StateSchema';
import type {DeepPartial} from '@reduxjs/toolkit';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
}

const StoreProvider = ({children, initialState}: StoreProviderProps) => {
	const store = createReduxStore(initialState as StateSchema);

	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
