import type {UserSchema} from './../../../../entities/User/model/types/user';

import type {CounterState} from 'entities/Counter';

export interface StateSchema {
	counter: CounterState;
	user: UserSchema;
}
