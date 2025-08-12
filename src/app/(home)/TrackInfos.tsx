'use client'
import { useTranslations } from 'next-intl'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTrackInfo } from '@/hooks/useTrackInfo'
import stationOfLineData from '@/lib/StationOfLineData'

const DEMO_STATION = '台北車站'
const DEMO_STATIONS = ['台北101/世貿', '南京復興']

const demoStationData = stationOfLineData.filter((line) =>
  line.stations.some((s) => s.stationName['zh-TW'] === DEMO_STATION)
)

// console.log(demoStation1)

export function TrackInfos() {
  const t = useTranslations('HomePage')
  const currentTrackInfo = useTrackInfo()

  return (
    <Tabs defaultValue="nearby">
      <TabsList className="pl-1">
        <TabsTrigger className="w-[60px]" value="nearby">
          {t('stops/nearby_label')}
        </TabsTrigger>
        <TabsTrigger className="w-[60px]" value="favorite">
          {t('stops/favorite_label')}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="nearby" className="min-h-40 bg-gray-100">
        {/* TODO: 串API data */}
        {t('stops/nearby_label')}
        {currentTrackInfo ? <div>有資料</div> : <p>loading...</p>}
      </TabsContent>
      <TabsContent value="favorite" className="flex min-h-40 items-center justify-center bg-gray-100 text-gray-400">
        {t('stops/favorite_placeholder')}
      </TabsContent>
    </Tabs>
  )
}
