import { Dayjs } from "dayjs";

export type CalendarViewType = "month" | "week" | "day"

export interface ICalendarEvent {
  id: string;
  title: string;
  description: string;
  start: Dayjs;
  end: Dayjs;
  isAllDay: boolean;
  location: string;
}

export interface ICalendarEventStore {
  events: ICalendarEvent[]
  isPopoverOpen: boolean;
  isEventSummaryOpen: boolean;
  selectedEvent: ICalendarEvent | null;
  setEvents: (events: ICalendarEvent[]) => void;
  openPopover: () => void;
  closePopover: () => void;
  openEventSummary: (event: ICalendarEvent) => void;
  closeEventSummary: () => void;
}
