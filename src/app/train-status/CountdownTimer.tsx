'use client'
import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  intervalMs: number
  onComplete?: () => void
  resetTrigger?: any // 當這個值改變時重置計時器
}

export function CountdownTimer({ intervalMs, onComplete, resetTrigger }: CountdownTimerProps) {
  const [secondsUntilUpdate, setSecondsUntilUpdate] = useState(intervalMs / 1000)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSecondsUntilUpdate((prev) => {
        if (prev <= 1) {
          onComplete?.()
          return 0 // 保持在 0，等待 resetTrigger 觸發重置
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(countdownInterval)
  }, [intervalMs, onComplete])

  useEffect(() => {
    setSecondsUntilUpdate(intervalMs / 1000)
  }, [intervalMs, resetTrigger])

  return (
    <p className="text-caption text-center text-gray-800">
      約 {secondsUntilUpdate.toString().padStart(2, '0')} 秒後更新
    </p>
  )
}
