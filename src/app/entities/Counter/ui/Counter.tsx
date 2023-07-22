import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import {Button} from 'shared';

import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue';
import {increment, decrement} from '../model/slice/counterSlice';

const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	const {t} = useTranslation();

	const incr = () => {
		dispatch(increment());
	};

	const decr = () => {
		dispatch(decrement());
	};

	return (
		<div>
			<h1 data-testid='value-title'>value: {counterValue}</h1>
			<Button data-testid='incr-btn' onClick={incr}>
				{t('увеличить')}
			</Button>
			<Button data-testid='decr-btn' onClick={decr}>
				{t('уменшить')}
			</Button>
		</div>
	);
};

export default Counter;
