import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";
import { getMonth } from "../lib/getTime";

interface DataStoreType {
  userSelectedDate: string;
  twoDMonthArray: string[][];
  selectedMonthIndex: number;
}

const getMonthAsISO = (month = dayjs().month()): string[][] =>
  getMonth(month).map((week) => week.map((day) => day.toISOString()));

const initialState: DataStoreType = {
  userSelectedDate: dayjs().toISOString(),
  selectedMonthIndex: dayjs().month(),
  twoDMonthArray: getMonthAsISO(),
};

const calendarDataSlice = createSlice({
  name: "calendarData",
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<string>) {
      state.userSelectedDate = action.payload;
    },
    setMonth(state, action: PayloadAction<number>) {
      state.selectedMonthIndex = action.payload;
      state.twoDMonthArray = getMonthAsISO(action.payload);
    },
  },
});

export const { setDate, setMonth } = calendarDataSlice.actions;
export default calendarDataSlice.reducer;

// Usage:
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/store';
// import { setDate, setMonth } from '@/store/calendarDataSlice';
//
// const dispatch = useDispatch();
// const userSelectedDate = useSelector((state: RootState) => state.calendarData.userSelectedDate);
// const twoDMonthArray = useSelector((state: RootState) => state.calendarData.twoDMonthArray);
// const selectedMonthIndex = useSelector((state: RootState) => state.calendarData.selectedMonthIndex);
//
// // Example usage
// dispatch(setDate(dayjs()));
// dispatch(setMonth(5));
