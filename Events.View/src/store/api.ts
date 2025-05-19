import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICalendarEvent } from "@/types/calendar"
import dayjs from "dayjs";

export const calendarApi = createApi({
  reducerPath: "calendarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:44306/api/",
  }),
  endpoints: (builder) => ({
    getEvents: builder.query<ICalendarEvent[], void>({
      query: () => "CalendarEvents",
      transformResponse: (response: any[]) =>
        response.map((event) => ({
          ...event,
          start: dayjs(event.start),
          end: dayjs(event.end)
        }))
    }),
  }),
});

export const { useGetEventsQuery } = calendarApi;
