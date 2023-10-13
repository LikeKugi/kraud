import { configureStore } from '@reduxjs/toolkit';
import { api, ApiReducer } from '@store/api';
import { TodoSliceReducer } from '@store/todoSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [ApiReducer]: api.reducer,
    todos: TodoSliceReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
