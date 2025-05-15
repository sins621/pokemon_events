import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalendarViewState {
  selectedView: string;
}

const initialState: CalendarViewState = {
  selectedView: 'month',
};

const calendarViewSlice = createSlice({
  name: 'calendarView',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<string>) => {
      state.selectedView = action.payload;
    },
  },
});

export const { setView } = calendarViewSlice.actions;
export default calendarViewSlice.reducer;
