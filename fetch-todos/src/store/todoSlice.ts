import { createSlice } from '@reduxjs/toolkit';
import { api } from '@store/api';
import { RootState } from '@store/store';

const initialState: ITodo[] = []

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.fetchTodos.matchFulfilled,
      (state, action) => {
        state = [...action.payload]
        return state
      }
    )
  },
})

export const TodoSliceReducer = todoSlice.reducer;

export const selectTodos = (state: RootState) => state.todos;
