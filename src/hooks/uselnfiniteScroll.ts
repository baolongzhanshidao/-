import { useEffect, useRef, useCallback } from 'react'

type Options = {
  throttleTime?: number
  debounceTime?: number
  threshold?: number
}
const useScrollLoader = (callback: () => void,options: Options = {}) => {
  const {throttleTime = 800,debounceTime = 500,threshold = 300} = options
  const lastCalledRef = useRef<number>(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isMountedRef = useRef(true)
  const scrollPositionRef = useRef(0)

  // 保存滚动位置
  const saveScrollPosition = useCallback(() => {
    scrollPositionRef.current = window.scrollY
  }, [])
  useEffect(() => {
    // 添加路由变更监听
    window.addEventListener('beforeunload', saveScrollPosition)
    isMountedRef.current = true
    return () => {
      isMountedRef.current= false
      window.removeEventListener('beforeunload', saveScrollPosition)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [saveScrollPosition])
  const checkPosition = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    return scrollHeight - (scrollTop + clientHeight) < threshold
  }, [threshold])

  const triggerCallback = useCallback(() => {
    if (isMountedRef.current && checkPosition()) {
      lastCalledRef.current = Date.now()
      callback()
    }
  }, [callback, checkPosition])

  const handleScroll = useCallback(() => {
    saveScrollPosition()
    
    const now = Date.now()
    const timeSinceLast = now - lastCalledRef.current
    if (timeSinceLast < throttleTime) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      
      timeoutRef.current = setTimeout(() => {
        triggerCallback()
      }, throttleTime - timeSinceLast + debounceTime)
      return
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    
    timeoutRef.current = setTimeout(() => {
      triggerCallback()
    }, debounceTime)
  }, [saveScrollPosition, checkPosition, throttleTime, debounceTime, triggerCallback])

  useEffect(() => {
    const optimizedScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', optimizedScroll, { passive: true })
    return () => window.removeEventListener('scroll', optimizedScroll)
  }, [handleScroll])
}

export default useScrollLoader