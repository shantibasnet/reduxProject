import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from '../features/todo/todoSlice';


export default configureStore({
  reducer: {
    [TodoSlice.name]:TodoSlice.reducer
  },
})