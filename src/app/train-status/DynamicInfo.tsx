'use client'
import { useState, useMemo } from 'react'
import { useLocale } from 'next-intl'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icons } from '@/assets/icons'
import { TrackInfoItem } from '@/components/TrackInfoItem'
import metroLinesData from '@/lib/MetroLineData'
import stationOfLineData from '@/lib/StationOfLineData'
import type { MetroLineID } from '@/lib/types'
import { getTrainDirection } from '@/lib/utils'
import { TRACK_INFO_FETCH_INTERVAL, useTrackInfo } from '@/hooks/useTrackInfo'
import { Locale } from '@/lib/types'
import { CountdownTimer } from './CountdownTimer'

const tabTriggerClassName = {
  BR: 'peer-data-[state=active]:bg-metro-line-BR',
  R: 'peer-data-[state=active]:bg-metro-line-R',
  G: 'peer-data-[state=active]:bg-metro-line-G',
  O: 'peer-data-[state=active]:bg-metro-line-O',
  BL: 'peer-data-[state=active]:bg-metro-line-BL',
}

export function DynamicInfo() {
  const locale = useLocale() as Locale
  const currentTrackInfo = useTrackInfo()
  const [currentLineID, setCurrentLineID] = useState<MetroLineID>('R')

  const currentLine = useMemo(() => metroLinesData[currentLineID], [currentLineID])

  const currentStations = useMemo(
    () => stationOfLineData.find((line) => line.lineID === currentLineID)?.stations,
    [currentLineID]
  )

  const firstStation = useMemo(() => currentStations?.[0], [currentStations])

  const finalStation = useMemo(() => currentStations?.[currentStations.length - 1], [currentStations])

  /** 當前路線每一站的倒數時間 (包含兩個方向) */
  const stationCountDowns = useMemo(() => {
    if (!currentTrackInfo || !currentStations || !currentLine) return { toFinal: {}, toFirst: {} }

    const toFinal: Record<string, string> = {} // key: 站點 ID, value: 往終點站的進站倒數字串
    const toFirst: Record<string, string> = {} // key: 站點 ID, value: 往起點站的進站倒數字串

    currentStations.forEach((s) => {
      // 初始化每個站點的倒數時間
      toFinal[s.stationID] = '---'
      toFirst[s.stationID] = '---'

      // 取得當前站點兩邊方向的進站資訊
      const trackInfos = currentTrackInfo.filter(
        (info) => info.StationName.replace('站', '') === s.stationName['zh-TW'].replace('站', '')
      )

      trackInfos.forEach((trackInfo) => {
        const trackDirection = getTrainDirection(currentLine.id, s.stationName['zh-TW'], trackInfo.DestinationName)
        if (trackDirection === 'ToFinal') {
          toFinal[s.stationID] = translateCountDown(trackInfo.CountDown, locale)
        } else if (trackDirection === 'ToFirst') {
          toFirst[s.stationID] = translateCountDown(trackInfo.CountDown, locale)
        }
      })
    })

    return { toFinal, toFirst }
  }, [currentTrackInfo, currentStations, currentLine])

  function translateCountDown(countDown: string, locale: Locale) {
    if (countDown === '列車進站' && locale === 'zh-TW') return '進站中'
    if (countDown === '列車進站' && locale === 'en') return 'Arriving'
    if (countDown === '營運時間已過' && locale === 'en') return 'Closed'
    if (countDown === '資料擷取中') return '---'

    return countDown
  }

  if (!currentLine || !currentStations || !firstStation || !finalStation) {
    // TODO: handle loading state
    return <p className="text-center text-gray-400">Loading...</p>
  }

  return (
    <>
      <section className="mt-3 mb-2 px-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full max-w-[360px] items-center px-2 py-1">
            <div
              className="text-caption-bold flex size-7 items-center justify-center rounded-md text-white"
              style={{ backgroundColor: currentLine.color }}
            >
              {currentLine.id}
            </div>
            <span className="text-body ml-2">{currentLine.name[locale]}</span>
            <Icons.ChevronRight className="mt-0.5 ml-auto size-6 rotate-90" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="min-w-none">
            {Object.values(metroLinesData).map((line) => (
              <DropdownMenuItem key={line.id} onClick={() => setCurrentLineID(line.id)}>
                <span className="text-body whitespace-pre" style={{ color: line.color }}>
                  <span className="inline-block w-4">{line.id.padEnd(2, ' ')}</span> {line.name[locale]}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <CountdownTimer intervalMs={TRACK_INFO_FETCH_INTERVAL} resetTrigger={currentTrackInfo} />

      <Tabs defaultValue="to-final-station" className="mt-3 gap-0">
        {/* 選擇方向 */}
        <TabsList className="w-full px-3">
          <TabsTrigger value="to-final-station" size="lg" divClassName={tabTriggerClassName[currentLineID]}>
            {locale === 'en' ? `To ${finalStation.stationName.en}` : `往${finalStation.stationName['zh-TW']}`}
          </TabsTrigger>
          <TabsTrigger value="to-first-station" size="lg" divClassName={tabTriggerClassName[currentLineID]}>
            {locale === 'en' ? `To ${firstStation.stationName.en}` : `往${firstStation.stationName['zh-TW']}`}
          </TabsTrigger>
        </TabsList>

        {/* 進站資訊列表 */}
        <TabsContent value="to-final-station" className="space-y-4 bg-gray-100 p-4">
          {currentStations.map((s) => (
            <TrackInfoItem
              key={s.stationID}
              lineID={currentLine.id}
              lineName={currentLine.name[locale]}
              stationID={s.stationID}
              stationName={s.stationName[locale]}
              countDown={stationCountDowns.toFinal[s.stationID] || '---'}
              isEntering={
                stationCountDowns.toFinal[s.stationID] === '進站中' ||
                stationCountDowns.toFinal[s.stationID] === 'Arriving'
              }
            />
          ))}
        </TabsContent>
        <TabsContent value="to-first-station" className="space-y-4 bg-gray-100 p-4">
          {currentStations.toReversed().map((s) => (
            <TrackInfoItem
              key={s.stationID}
              lineID={currentLine.id}
              lineName={currentLine.name[locale]}
              stationID={s.stationID}
              stationName={s.stationName[locale]}
              countDown={stationCountDowns.toFirst[s.stationID]}
              isEntering={
                stationCountDowns.toFirst[s.stationID] === '進站中' ||
                stationCountDowns.toFirst[s.stationID] === 'Arriving'
              }
            />
          ))}
        </TabsContent>
      </Tabs>
    </>
  )
}
