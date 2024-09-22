import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

/**
 * Configures the Redux store with the specified reducer.
 *
 * @type {Object}
 * @property {Function} reducer - The root reducer function for the Redux store.
 */
export const store = configureStore({
    reducer: {
        // The key here should match the name of the slice in your createSlice call
        todo: todoReducer
    }
});
