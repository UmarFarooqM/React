import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer //we can give list of reducers also
});