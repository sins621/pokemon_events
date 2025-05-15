import { configureStore } from "@reduxjs/toolkit";
import { calendarApi } from "./api";
import calendarViewReducer from "./calendarViewSlice";
import calendarDataReducer from "./calendarDataSlice";

export const store = configureStore({
  reducer: {
    [calendarApi.reducerPath]: calendarApi.reducer,
    calendarView: calendarViewReducer,
    calendarData: calendarDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(calendarApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
