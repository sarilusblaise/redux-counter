import styles from './Counter.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

export function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.row}>
					<button
						className={styles.button}
						aria-label='Decrement value'
						onClick={() => dispatch(decrement())}
					>
						-
					</button>
					<span className={styles.value}>{count}</span>
					<button
						className={styles.button}
						aria-label='Increment value'
						onClick={() => dispatch(increment())}
					>
						+
					</button>
				</div>
				<input
					className={styles.textbox}
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<div>
					<div className={styles.row}>
						<button
							className={styles.button}
							onClick={() =>
								dispatch(incrementByAmount(Number(incrementAmount) || 0))
							}
						>
							Add Amount
						</button>
						<button className={styles.asyncButton}>Add Async</button>
						<button
							className={styles.button}
							onClick={() => {
								if (Number(incrementAmount) % 2 === 0)
									dispatch(incrementByAmount(Number(incrementAmount)));
							}}
						>
							Add If Odd
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
