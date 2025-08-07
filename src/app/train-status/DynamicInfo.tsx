import { useLocale } from 'next-intl'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrackInfoItem } from '@/components/TrackInfoItem'
import metroLinesData from '@/lib/MetroLineData'
import stationOfLineData from '@/lib/StationOfLineData'

export function DynamicInfo() {
  const locale = useLocale()
  const rLineData = metroLinesData.find((line) => line.id === 'R')
  const rLineStations = stationOfLineData.find((line) => line.lineID === 'R')?.stations

  return (
    rLineData &&
    rLineStations && (
      <div>
        <div className="mt-3 mb-5 px-8">
          <button className="h-8 w-full rounded-lg bg-gray-200"></button>
        </div>

        <Tabs defaultValue="to-tamsui" className="gap-0">
          <TabsList className="w-full px-3">
            <TabsTrigger value="to-tamsui" size="lg" divClassName="peer-data-[state=active]:bg-metro-line-R">
              往淡水
            </TabsTrigger>
            <TabsTrigger value="to-xinyi" size="lg" divClassName="peer-data-[state=active]:bg-metro-line-R">
              往信義
            </TabsTrigger>
          </TabsList>

          <TabsContent value="to-tamsui" className="space-y-4 bg-gray-100 p-4">
            {rLineStations.map((station) => {
              const isEntering = false
              return (
                <TrackInfoItem
                  key={station.stationID}
                  lineID={rLineData.id}
                  lineName={locale === 'en' ? rLineData.name.en : rLineData.name.zhTW}
                  stationSequence={station.sequence}
                  stationName={locale === 'en' ? station.stationName.en : station.stationName.zhTW}
                  countDown={'5 : 30'}
                  isEntering={isEntering}
                />
              )
            })}
          </TabsContent>
          <TabsContent value="to-xinyi" className="bg-gray-100 p-4">
            assdf
          </TabsContent>
        </Tabs>
      </div>
    )
  )
}
