process.env.__NEXT_STRICT_MODE = 'false';
import { render, act } from '@testing-library/react';
import useSWR from '@/hooks/useswr'

it('应合并同时发起的请求', async () => {
  const fetcher = jest.fn(() => 
    new Promise(resolve => setTimeout(() => resolve('data'), 100))
  );
  const Component = () => {
    useSWR('/api/gouwuche/', fetcher,{});
    return null;
  };
  // 同时渲染3个组件
  await act(async () => {
    render(
      <>
        <Component />
        <Component />
        <Component />
      </>
    );
  });
  
  // 验证只调用了一次
  expect(fetcher).toHaveBeenCalledTimes(1);
});