import type {CounterState} from 'entities/Counter';
import type {UserSchema} from 'entities/User';

import type {LoginSchema} from 'features/AuthByUsername';

export interface StateSchema {
	counter: CounterState;
	user: UserSchema;
	loginForm: LoginSchema;
}
