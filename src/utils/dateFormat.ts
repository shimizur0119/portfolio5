import { DateTime } from "luxon";

export const dateFormat = (date: string) => {
  return DateTime.fromISO(date).toFormat("yyyy.MM.dd");
};
