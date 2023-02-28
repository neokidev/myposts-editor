import { useEffect, useRef } from 'react'

type GlobalPointerEventHandler = (e: PointerEvent) => void

type UseGlobalPointerUpEvent = {
  (onPointerUp?: GlobalPointerEventHandler, isActive?: boolean): void
}
export const useGlobalPointerUpEvent: UseGlobalPointerUpEvent = (
  onPointerUp?: GlobalPointerEventHandler,
  isActive = true
) => {
  const savedOnPointerUp = useRef<GlobalPointerEventHandler>()

  useEffect(() => {
    savedOnPointerUp.current = onPointerUp
  }, [onPointerUp])

  useEffect(() => {
    if (isActive) {
      if (savedOnPointerUp.current) {
        addEventListener('pointerup', savedOnPointerUp.current)
      }

      return () => {
        if (savedOnPointerUp.current) {
          removeEventListener('pointerup', savedOnPointerUp.current)
        }
      }
    }
  }, [isActive])
}
