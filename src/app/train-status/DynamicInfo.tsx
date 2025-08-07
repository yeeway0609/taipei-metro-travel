'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { TrackInfoItem } from '@/components/TrackInfoItem'
import chevronRightIcon from '@/assets/chevron-right.svg'
import metroLinesData from '@/lib/MetroLineData'
import stationOfLineData from '@/lib/StationOfLineData'
import { getTrackInfo } from '@/lib/metroApi'
import type { TrackInfo } from '@/lib/metroApi'
import type { MetroLineID } from '@/lib/types'

const tabTriggerClassName = {
  BR: 'peer-data-[state=active]:bg-metro-line-BR',
  R: 'peer-data-[state=active]:bg-metro-line-R',
  G: 'peer-data-[state=active]:bg-metro-line-G',
  O: 'peer-data-[state=active]:bg-metro-line-O',
  BL: 'peer-data-[state=active]:bg-metro-line-BL',
}

export function DynamicInfo() {
  const locale = useLocale()
  const [trackInfo, setTrackInfo] = useState<TrackInfo[] | null>(null) // 所有路線與車站的進站狀態
  const [currentLineID, setCurrentLineID] = useState<MetroLineID>('R')

  const currentLine = useMemo(() => metroLinesData.find((line) => line.id === currentLineID), [currentLineID])

  const currentStations = useMemo(
    () => stationOfLineData.find((line) => line.lineID === currentLineID)?.stations,
    [currentLineID]
  )

  const firstStation = useMemo(() => currentStations?.[0], [currentStations])

  const finalStation = useMemo(() => currentStations?.[currentStations.length - 1], [currentStations])

  useEffect(() => {
    async function fetchTrackInfo() {
      try {
        const data = await getTrackInfo()
        if (data) setTrackInfo(data)
        console.log('取得列車動態資料:', data)
      } catch (error) {
        console.error('取得列車動態資料失敗:', error)
      }
    }

    fetchTrackInfo()

    const interval = setInterval(fetchTrackInfo, 15000)

    return () => clearInterval(interval)
  }, [])

  if (!currentLine || !currentStations || !firstStation || !finalStation) {
    // TODO: handle loading state
    return <p className="text-center text-gray-400">Loading...</p>
  }

  return (
    <>
      <section className="mt-3 mb-5 px-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full max-w-[360px] items-center px-2 py-1">
            <div
              className="text-caption-bold flex size-7 items-center justify-center rounded-md text-white"
              style={{ backgroundColor: currentLine.color }}
            >
              {currentLine.id}
            </div>
            <span className="text-body ml-2">{locale === 'en' ? currentLine.name.en : currentLine.name.zhTW}</span>
            <Image className="mt-0.5 ml-auto size-6 rotate-90" src={chevronRightIcon} alt="" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-full max-w-[360px]">
            {metroLinesData.map((line) => (
              <DropdownMenuItem key={line.id} onClick={() => setCurrentLineID(line.id)}>
                <span className="text-body">{locale === 'en' ? line.name.en : line.name.zhTW}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <Tabs defaultValue="to-final-station" className="gap-0">
        {/* 選擇方向 */}
        <TabsList className="w-full px-3">
          <TabsTrigger value="to-final-station" size="lg" divClassName={tabTriggerClassName[currentLineID]}>
            {locale === 'en' ? `To ${finalStation.stationName.en}` : `往${finalStation.stationName.zhTW}`}
          </TabsTrigger>
          <TabsTrigger value="to-first-station" size="lg" divClassName={tabTriggerClassName[currentLineID]}>
            {locale === 'en' ? `To ${firstStation.stationName.en}` : `往${firstStation.stationName.zhTW}`}
          </TabsTrigger>
        </TabsList>

        {/* 進站資訊列表 */}
        <TabsContent value="to-final-station" className="space-y-4 bg-gray-100 p-4">
          {currentStations.map((station) => {
            const isEntering = false
            return (
              <TrackInfoItem
                key={station.stationID}
                lineID={currentLine.id}
                lineName={locale === 'en' ? currentLine.name.en : currentLine.name.zhTW}
                stationSequence={station.sequence}
                stationName={locale === 'en' ? station.stationName.en : station.stationName.zhTW}
                countDown={trackInfo ? '5 : 30' : 'Loading'}
                isEntering={isEntering}
              />
            )
          })}
        </TabsContent>
        <TabsContent value="to-first-station" className="bg-gray-100 p-4">
          assdf
        </TabsContent>
      </Tabs>
    </>
  )
}
