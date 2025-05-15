import dayjs, { Dayjs } from "dayjs";

interface ViewStoreType {
  selectedView: string;
  setView: (value: string) => void;
}

interface DataStoreType {
  userSelectedDate: Dayjs;
  setDate: (value: Dayjs) => void;
  twoDMonthArray: dayjs.Dayjs[][];
  selectedMonthIndex: number;
  setMonth: (index: number) => void;
}

export const useViewStore = create<ViewStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        selected: "month",
        setView: (value: string) => {
          set({ selectedView: value });
        },
      }),
      {
        name: "calendar_view",
        skipHydration: true,
      },
    ),
  ),
);
