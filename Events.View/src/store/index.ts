import { configureStore } from "@reduxjs/toolkit";
import { calendarApi } from "./api";

export const store = configureStore({
  reducer: {
    [calendarApi.reducerPath]: calendarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(calendarApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
