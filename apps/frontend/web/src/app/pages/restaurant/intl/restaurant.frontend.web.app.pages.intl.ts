import { intlPrefix } from '../../../constants';
import { TPagesIntl } from '../types';

export const restaurantIntl: Record<
  'opening_hours_header',
  `${typeof intlPrefix}.pages.${TPagesIntl}`
> = {
  opening_hours_header: `${intlPrefix}.pages.restaurants.panel.opening_hours_header`,
};
