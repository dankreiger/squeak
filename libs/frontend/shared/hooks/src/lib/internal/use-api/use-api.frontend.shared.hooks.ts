import { createFetch, sleep } from '@squeak-frontend/shared.utils';
import { useEffect, useState } from 'react';

const apiCache = new Map();
/**
 * hook that allows us to delay a loading state
 * this is very useful when responses come in quickly
 *
 * @param url              - url to make request to
 * @param {options} options
 * @param {loadingDelay: number} options.loadingDelay - time in MS before a loading state should be set
 * @param {staticResponse: T} options.staticResponse
 */
export const useApi = <T>(
  url: string,
  {
    loadingDelay = 200,
    staticResponse,
  }: {
    loadingDelay?: number;
    staticResponse?: T;
  } = {}
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const cache = apiCache.get(url);
    if (cache) {
      setData(cache);
      setLoading(false);
      return;
    }

    if (staticResponse) {
      setLoading(false);
      apiCache.set(url, staticResponse);
      setData(staticResponse);
      return;
    }

    let abortApiRequest = () => {
      void 0;
    };
    const callApi = async () => {
      try {
        const promise = new Promise<T>((resolve, reject) => {
          abortApiRequest = createFetch<T>(url, {
            onSuccess: resolve,
            onFail: reject,
          });
        });

        const timeout = sleep(loadingDelay);
        const winner = await Promise.race([promise, timeout]);
        // if response returns fast than the specified delay,
        // return without setting the loading state
        if (winner !== sleep.timeoutToken) {
          setData(winner);
          apiCache.set(url, winner);
        } else {
          setLoading(true);
          const slowResponse = await promise;
          setData(slowResponse);

          apiCache.set(url, slowResponse);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    callApi();

    return abortApiRequest;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error, apiCache };
};
