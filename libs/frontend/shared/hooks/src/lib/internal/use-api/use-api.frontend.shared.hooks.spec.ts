import { act, renderHook } from '@testing-library/react-hooks';
import { useApi } from './use-api.frontend.shared.hooks';

jest.useFakeTimers();
describe('useApi', () => {
  let originalFetch: typeof fetch;
  beforeEach(() => {
    originalFetch = global.fetch;
  });
  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });
  test('returns a response', async () => {
    const fakeResponse = { title: 'example text' };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;

    const url = 'https://api.fetch-me.com';
    const { result, waitForNextUpdate } = renderHook(() => useApi(url));

    expect(result.current).toEqual({
      data: undefined,
      error: null,
      loading: true,
      apiCache: new Map(),
    });

    await waitForNextUpdate();

    expect(result.current).toEqual({
      data: fakeResponse,
      error: null,
      loading: false,
      apiCache: new Map([[url, fakeResponse]]),
    });

    result.current.apiCache.clear();
  });
  test('sets loading state if time exceeds loading delay, then awaits response', async () => {
    const fakeResponse = { title: 'example dog' };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;

    const url = 'https://api.fetch-me.com';
    const { result, waitForNextUpdate } = renderHook(() =>
      useApi(url, { loadingDelay: 50 })
    );

    await act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(result.current).toEqual({
      data: undefined,
      error: null,
      loading: true,
      apiCache: new Map(),
    });

    await act(async () => {
      await waitForNextUpdate();
    });

    // gets response and sets to false
    expect(result.current).toEqual({
      data: fakeResponse,
      error: null,
      loading: false,
      apiCache: new Map([[url, fakeResponse]]),
    });
  });
});
