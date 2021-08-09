const dateToSecondsSinceMidnight = (date: Date | null) => {
  if (!date) {
    return null;
  }
  const dateCopy = new Date(date);
  const msSinceMidnight = date.getTime() - dateCopy.setHours(0, 0, 0, 0);
  return msSinceMidnight / 1000;
};

const secondsSinceMidnightToDate = (seconds: number | null) => {
  if (!seconds) {
    return seconds;
  }
  const ms = seconds * 1000;
  return new Date(new Date().setHours(0, 0, 0, 0) + ms);
};

export const timeFns = {
  dateToSecondsSinceMidnight,
  secondsSinceMidnightToDate,
};
