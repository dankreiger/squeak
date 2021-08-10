/**
 * given an input of seconds and a locale,
 * returns a formatted time
 * @param seconds
 * @param locale
 * @returns
 */
export const getFmtTime = (seconds: number, locale: string) => {
  const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric' };

  const time = new Date(new Date().setHours(0, 0, 0, 0) + seconds * 1000);
  // only show minutes if there are minutes in the opening hour
  if (time.getMinutes() !== 0) {
    timeOptions.minute = '2-digit';
  }

  let i18nTime = time.toLocaleTimeString(locale, timeOptions);

  // if time starts with 0, remove the 0
  if (i18nTime[0] === '0') {
    i18nTime = i18nTime.slice(1, i18nTime.length);
  }

  return i18nTime;
};
