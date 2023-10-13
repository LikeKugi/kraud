import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/todos',
  }),
  endpoints: (build) => ({
    fetchTodos: build.query<ITodo[], string | void>({
      query(arg) {
        return {
          url: arg ? arg : '',
          method: 'GET'
        };
      }
    })
  })
});

export const ApiReducer = api.reducerPath;
export const { useLazyFetchTodosQuery } = api;
