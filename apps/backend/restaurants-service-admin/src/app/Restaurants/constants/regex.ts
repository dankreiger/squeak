import { daysOfWeek } from './daysOfWeek';

export const dayMatcher = new RegExp(daysOfWeek.join('|'));
export const numberMatcher = /\d+/;
