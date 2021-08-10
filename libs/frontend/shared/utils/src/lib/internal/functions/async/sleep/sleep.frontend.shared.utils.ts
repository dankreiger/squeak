const timeoutToken = Symbol('timeout');
const _sleep = (ms: number) =>
  new Promise<typeof timeoutToken>((res) => {
    setTimeout(() => res(timeoutToken), ms);
  });

_sleep.timeoutToken = timeoutToken;

export const sleep = _sleep;
