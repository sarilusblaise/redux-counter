//redux store : the redux store keep all state of the application that want to use in multiple component
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
	reducer: { counter: counterReducer },
});
