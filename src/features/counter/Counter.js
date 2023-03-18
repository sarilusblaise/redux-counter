import styles from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
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
				<input className={styles.textbox} aria-label='Set increment amount' />
				<div>
					<div className={styles.row}>
						<button className={styles.button}>Add Amount</button>
						<button className={styles.asyncButton}>Add Async</button>
						<button className={styles.button}>Add If Odd</button>
					</div>
				</div>
			</div>
		</main>
	);
}
