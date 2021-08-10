export const secsSinceMidnight = (seconds: number) => ({
  toTime: new Date(new Date().setHours(0, 0, 0, 0) + seconds * 1000),
});
