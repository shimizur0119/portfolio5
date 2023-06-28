import { useState, useEffect } from 'react'

const useElmRect = (ref: any) => {
  const [rect, setRect] = useState<any>()

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [ref])

  return rect
}

export default useElmRect
