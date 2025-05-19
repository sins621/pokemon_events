import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const calendarApi = createApi({
  reducerPath: "calendarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:44306/api/",
  }),
  endpoints: (builder) => ({
    getEvents: builder.query<CalendarEvent[], void>({
      query: () => "CalendarEvents",
    }),
  }),
});

export const { useGetEventsQuery } = calendarApi;

export interface CalendarEvent {
  id: number;
  title: string;
  description?: string;
  start: string;
  end: string;
  isAllDay: boolean;
  location?: string;
}
