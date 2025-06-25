import { useState,useCallback,useRef,useEffect } from "react";
interface CacheEntry{
  data?: Date
  error?: Error
  isValidating: boolean
  timestamp: number
  retryCount: number
  oldtimestamp:number
  subscribers: Set<() => void>
}
export const cache = new Map<string,CacheEntry>()
function getCacheEntry(key: string) {
  if (!cache.has(key)) {
    cache.set(key, {
      data: undefined,
      error: undefined,
      isValidating: false,
      timestamp: 0,
      retryCount:0,
      subscribers: new Set(),
      oldtimestamp:0
    });
  }
  return cache.get(key)!;
}
function notifySubscribers(key: string) {
  const entry = cache.get(key);
  if (entry) {
    entry.subscribers.forEach((updateFn: () => any):any => updateFn());
  }
}
function useSWR(key:string,fetcher:(key:string)=>Promise<any>,options:any){

     const retryCountRef = useRef<number>(0)
     const time = useRef<NodeJS.Timeout|number>(0)
     const onlineListener = useRef<()=>void>(()=>{})
    const {revalidateOnReconnect = true,maxRetryCount = 5,retswr = 100,cacheMaxAge = 5 * 60 * 1000,dedupingInterval=500} = options
    const cacheEntry = getCacheEntry(key)
      const [stote,setstote] = useState({
      data:cacheEntry.data,
      error:cacheEntry.error,
      isValidating:cacheEntry.isValidating
     })
    const isCacheExpired = useCallback(() => {
    if (cacheEntry.timestamp === 0) return true;
    const currentTime = Date.now();
    return (currentTime - cacheEntry.timestamp) > cacheMaxAge;
  }, [cacheEntry, cacheMaxAge]);

    useEffect(() => {
    const updateComponent = () => {
      const entry = cache.get(key);
      if (entry) {
        setstote({
          data: entry.data,
          error: entry.error,
          isValidating: entry.isValidating,
        });}};
    cacheEntry.subscribers.add(updateComponent);
    return () => {
      cacheEntry.subscribers.delete(updateComponent);
      if (time.current) {
        clearTimeout(time.current);
      }
      if (onlineListener.current) {
        window.removeEventListener('online', onlineListener.current);
      }
    };
  }, [key]);
   const revalidate = useCallback(async ()=>{
    
      const now = Date.now();
    if (cacheEntry.isValidating &&
      ((now - cacheEntry.oldtimestamp) < dedupingInterval)){
      return;
    }     
    cacheEntry.oldtimestamp = now
    if(cacheEntry.isValidating){ return }
    cacheEntry.isValidating = true
    notifySubscribers(key)
    try{
        const data = await fetcher(key)
        cacheEntry.data = data
        cacheEntry.error = undefined
        cacheEntry.isValidating = false
        cacheEntry.timestamp = Date.now()
        cacheEntry.retryCount = 0
        retryCountRef.current = 0
        notifySubscribers(key)
      if (onlineListener.current) {
        window.removeEventListener('online', onlineListener.current);
        onlineListener.current = () => {};
      }
    } catch (err){
        const error = err as Error
        cacheEntry.error = error
        cacheEntry.isValidating = false
        const newretryCount = retryCountRef.current+1
        cacheEntry.retryCount = newretryCount
        retryCountRef.current = newretryCount
        notifySubscribers(key)
        if(revalidateOnReconnect && (retryCountRef.current<=maxRetryCount)){
          time.current = setTimeout(revalidate,retswr)
        } else if (revalidateOnReconnect){
          onlineListener.current = ()=>{
            if(navigator.onLine){
              cacheEntry.retryCount = 0
              retryCountRef.current = 0
              revalidate()
            }
          }
          window.addEventListener('online',onlineListener.current)
        }
    }
    }
    ,[key,fetcher,revalidateOnReconnect,maxRetryCount,cacheEntry,retswr,dedupingInterval])
  useEffect(() => {
    if (!cacheEntry.data || isCacheExpired()) {
      revalidate();
    }
  }, [key, revalidate, cacheEntry]);
  return {
    data:stote.data,
    error:stote.error,
    isValidating:stote.isValidating,
    revalidate,
  }
}
export default useSWR
