import { Record, ResourceComponentProps } from 'react-admin';
import { daysOfWeek } from '../../constants/daysOfWeek';
import './OpeningHoursField.css';

export const OpeningsHoursField = (
  props: ResourceComponentProps & { sourceStr: string; record: Record }
) => {
  const { record } = props;

  // const UIOpeningTimes = getUIOpeningTimes(get(record, 'openingHours')) as any;
  return (
    <div>
      {daysOfWeek.map((day) => (
        <div className="opening-hours-display" key={day}>
          <span>{day}</span>
          <span className="opening-hours-display-times">
            {/* {UIOpeningTimes[day]} */}
          </span>
        </div>
      ))}
    </div>
  );
};
