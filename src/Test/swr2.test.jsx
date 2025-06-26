process.env.__NEXT_STRICT_MODE = 'false';
import { render, act } from '@testing-library/react';
import useSWR from '@/hooks/useswr'
jest.useFakeTimers()
const fetcher = jest.fn(() => 
    new Promise(resolve =>resolve('data'))
  );
it('首次请求应调用fetcher', async () => {
  const Component = () => {
    useSWR('/api/gouwuche/', fetcher,{});
    return null;
  };
  await act(async () => {
    render(
      <Component />
    )})
  expect(fetcher).toHaveBeenCalledTimes(1);
});
it('5分钟内同源请求应返回缓存所以不会调用fetcher', async () => {
  const Component = () => {
    useSWR('/api/gouwuche/', fetcher,{});
    return null;
  };
  await act(async () => {
    render(
      <Component />
    )})
  expect(fetcher).toHaveBeenCalledTimes(0);
});
it('5分钟后再次调用此时缓存过期因调用fetcher重新获取数据', async () => {
    act(() => {
      jest.advanceTimersByTime(5 * 60 * 1000 + 59 * 1000);
    });
  const Component = () => {
    useSWR('/api/gouwuche/', fetcher,{});
    return null;
  };
  await act(async () => {
    render(
      <Component />
    )})
  expect(fetcher).toHaveBeenCalledTimes(1);
});
