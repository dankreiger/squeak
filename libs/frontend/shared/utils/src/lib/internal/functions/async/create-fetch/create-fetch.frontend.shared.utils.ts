type FetchOptions<S> = {
  onSuccess: (res: S) => void;
  onFail: (error: any) => void;
} & RequestInit;

export const createFetch = <S>(
  url: string,
  { onSuccess, onFail, ...init }: FetchOptions<S>
) => {
  const abortController = new AbortController();

  fetch(url, { signal: abortController.signal, ...init })
    .then((res) => res.json())
    .then(onSuccess)
    .catch(onFail);

  return () => {
    abortController.abort();
  };
};
