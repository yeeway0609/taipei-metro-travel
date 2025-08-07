import { useState, useEffect } from 'react'
import { getTrackInfo } from '@/lib/metroApi'
import type { TrackInfo } from '@/lib/metroApi'

export const TRACK_INFO_FETCH_INTERVAL = 15000 // 15 seconds

export function useTrackInfo() {
  const [currentTrackInfo, setCurrentTrackInfo] = useState<TrackInfo[] | null>(null)

  useEffect(() => {
    async function fetchTrackInfo() {
      try {
        const data = await getTrackInfo()
        if (data) setCurrentTrackInfo(data)
        console.log('取得列車動態資料:', data)
      } catch (error) {
        console.error('取得列車動態資料失敗:', error)
      }
    }

    fetchTrackInfo()

    const interval = setInterval(fetchTrackInfo, TRACK_INFO_FETCH_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  return currentTrackInfo
}
