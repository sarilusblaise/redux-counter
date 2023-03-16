import styles from './Counter.module.css';

export function Counter() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.row}>
					<button className={styles.button} aria-label='Decrement value'>
						-
					</button>
					<span className={styles.value}>0</span>
					<button className={styles.button} aria-label='Increment value'>
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
