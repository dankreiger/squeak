// @ts-nocheck

const oneHourMs = 3600000;
const oneDayMs = 86400000;

const getOpeningHourTime = ({
  secsSinceMidnight,
  addHourAt,
  subtractHourAt,
}: {
  secsSinceMidnight: number;
  addHourAt: number | undefined;
  subtractHourAt: number | undefined;
}) => {
  let hourOffset = 0;
  const currentHour = new Date().getHours();

  if (Number.isInteger(addHourAt)) {
    if (addHourAt >= currentHour) {
      hourOffset += oneHourMs;
    }
  }
  if (Number.isInteger(subtractHourAt)) {
    if (subtractHourAt >= currentHour) {
      hourOffset -= oneHourMs;
    }
  }

  const msSinceMidnight = (hourOffset + secsSinceMidnight) * 1000;
  return new Date(new Date().setHours(0, 0, 0, 0) + msSinceMidnight);
};

function msUntilNextClockHour() {
  return oneHourMs - (new Date().getTime() % oneHourMs);
}
function msUntilNextClockDay() {
  return oneDayMs - (new Date().getTime() % oneDayMs);
}

// const clockForwardDay = new Date('Sun Mar 28 2021');
// const clockBackDay = new Date('Sun Oct 31 2021');

const checkDstDay = () => {
  const date = new Date();

  // find hour when DST begins,
  // if DST hour found, return early with instructions
  // on how to alter the opening time
  const instructions = {
    addHourAt: undefined,
    subtractHourAt: undefined,
  };

  const hour = date.getHours();
  const nextHour = date.getHours() + 1;
  const hourClockDiff = date.setHours(nextHour) - date.setHours(hour);

  // if diff is larger than one hour
  // the clock has moved back
  if (hourClockDiff > oneHourMs) {
    return { ...instructions, addHourAt: nextHour };
  }
  // if diff is smaller than one hour
  // the clock has moved that day forward
  if (hourClockDiff < oneHourMs) {
    return { ...instructions, subtractHourAt: nextHour };
  }

  return instructions;
};

const createTimeout = (ms: number) => (cb: () => void) => {
  const id = setTimeout(cb, ms);
  return {
    unsubscribe: () => clearTimeout(id),
  };
};
const createInterval = (ms: number) => (cb: () => void) => {
  const id = setInterval(cb, ms);
  return {
    unsubscribe: () => clearInterval(id),
  };
};

const isDstObserved = () => {
  const jan = new Date(new Date().getUTCFullYear(), 0, 1);
  const jul = new Date(new Date().getUTCFullYear(), 6, 1);
  const dstDiff = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  return dstDiff !== new Date().getTimezoneOffset();
};

const getTodaysDurationInMs = () => {
  return new Date().setHours(24) - new Date().setHours(0);
};

const noopSubscription = {
  unsubscribe: () => {},
};
let unsubscribeFromDstInterval = noopSubscription;
const getCurrentOpeningHours = ({ secsSinceMidnight }) => {
  unsubscribeFromDstInterval.unsubscribe();
  const isDst = getTodaysDurationInMs() !== oneDayMs;
  if (isDstObserved() && isDst) {
    // check every hour to see
    const waitForNextClockHour = createInterval(msUntilNextClockHour());
    unsubscribeFromDstInterval = waitForNextClockHour(() => {
      const { addHourAt, subtractHourAt } = checkDstDay();
      // set state

      getOpeningHourTime({
        secsSinceMidnight,
        addHourAt,
        subtractHourAt,
      });
    });
  } else {
    // set state
    return getOpeningHourTime({
      secsSinceMidnight,
    });
  }
};

// set state
console.log(getCurrentOpeningHours({ secsSinceMidnight: 9000 }));

const getFmtTime = (secsSinceMidnight) =>
  new Date(getCurrentOpeningHours({ secsSinceMidnight })).toLocaleTimeString(
    'en-US',
    { hour: 'numeric', minute: '2-digit' }
  );

export const getUIOpeningTimes = (data) => {
  console.log({ data });
  return Object.entries(data).reduce(
    (acc, [day, openingTimes], entriesIdx, entriesArr) => {
      if (openingTimes.length === 0) {
        acc[day] = 'Closed';
        return acc;
      }
      openingTimes.forEach(
        ({ type, value }, openingTimesIdx, openingTimesArr) => {
          // get previous
          // if last time is open, get closed from next day and push to current day
          const nextEntryIdx = (entriesIdx + 1) % entriesArr.length;
          const nextEntry = entriesArr[nextEntryIdx];
          const nextFirstOpeningTime = nextEntry[1][0];

          const isLastOpeningTime =
            openingTimesIdx === openingTimesArr.length - 1;
          const stringTime = `${acc[day] || ''}${getFmtTime(value)}`;
          if (
            isLastOpeningTime &&
            type === 'open' &&
            nextFirstOpeningTime?.type === 'close'
          ) {
            const nextClosedTime = nextEntry[1].splice(0, 1)[0];
            acc[day] = `${stringTime} - ${getFmtTime(nextClosedTime.value)}`;
          } else if (type === 'open') {
            acc[day] = `${stringTime} - `;
          } else if (type === 'close') {
            acc[day] = `${stringTime}${isLastOpeningTime ? '' : ', '}`;
          }
        }
      );

      return acc;
    },
    {}
  );
};

// const data: TOpeningHoursResponse = {
//   monday: [],
//   tuesday: [
//     { type: 'open', value: 36000 },
//     { type: 'close', value: 64800 },
//   ],
//   wednesday: [],
//   thursday: [
//     { type: 'open', value: 36000 },
//     { type: 'close', value: 64800 },
//   ],
//   // friday: [{ type: 'open', value: 36000 }],
//   // saturday: [
//   //   { type: 'close', value: 3600 },
//   //   { type: 'open', value: 36000 },
//   // ],
//   friday: [
//     {
//       type: 'open',
//       value: 64800,
//     },
//   ],
//   saturday: [
//     {
//       type: 'close',
//       value: 3600,
//     },
//     {
//       type: 'open',
//       value: 32400,
//     },
//     {
//       type: 'close',
//       value: 39600,
//     },
//     {
//       type: 'open',
//       value: 57600,
//     },
//   ],
//   sunday: [
//     { type: 'close', value: 3600 },
//     { type: 'open', value: 43333 },
//     { type: 'close', value: 75600 },
//   ],
// };
// console.log(getUIOpeningTimes(data));

// wait until next day for checking again

const subscriptions = {
  waitForNextDay: noopSubscription,
  dailyBroadcaster: noopSubscription,
};

const waitForNextDay = createTimeout(msUntilNextClockDay());
const getDailyBroadcaster = () => createInterval(getTodaysDurationInMs());
// wait until the next day starts before polling
subscriptions.waitForNextDay = waitForNextDay(() => {
  const dailyBroadcaster = getDailyBroadcaster();
  // immediately invoke and poll once a day
  subscriptions.dailyBroadcaster = dailyBroadcaster(
    (function poll() {
      // set state
      console.log(getCurrentOpeningHours({ secsSinceMidnight: 9000 }));
      return poll;
    })()
  );
});
