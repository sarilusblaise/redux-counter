import { createSlice } from '@reduxjs/toolkit';
//createSlice allow you to create slice reducer(actions and reducer in one place)
// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

export const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value += -1;
		},
		addAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

console.log(counterSlice.actions.increment());
console.log(counterSlice.actions.decrement());
console.log(counterSlice.actions.addAmount());
const newState = counterSlice.reducer(
	{ value: 15 },
	counterSlice.actions.decrement()
);
console.log(newState);
export const { increment, decrement, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
