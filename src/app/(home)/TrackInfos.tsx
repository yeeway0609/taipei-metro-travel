'use client'
import { useTranslations, useLocale } from 'next-intl'
import { Locale } from '@/lib/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrackInfoItem } from '@/components/TrackInfoItem'
// import { useTrackInfo } from '@/hooks/useTrackInfo'
import stationOfLineData, { getStationInfosByName } from '@/lib/StationOfLineData'
import { StationIdBadge } from '@/components/StationIdBadge'

export function TrackInfos() {
  const locale = useLocale() as Locale

  const t = useTranslations('HomePage')
  // const currentTrackInfo = useTrackInfo()

  const stationName = '台北車站'
  const stationInfos = getStationInfosByName(stationName)

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

      <TabsContent value="nearby" className="min-h-40 bg-gray-100 p-2.5">
        {stationInfos && (
          <div className="flex items-center gap-1.5">
            {stationInfos.map((info) => (
              <StationIdBadge key={info.stationID} lineID={info.lineID} stationID={info.stationID} />
            ))}
            <h3 className="text-sm">{stationInfos[0].stationName[locale]}</h3>
          </div>
        )}
        <hr className="my-2.5 w-full border-gray-500" />

        <section className="space-y-4">
          <TrackInfoItem
            lineID="R"
            lineName={locale === 'zh-TW' ? '淡水信義線' : 'Tamsui-Xinyi Line'}
            stationID="R02"
            stationName={locale === 'zh-TW' ? '象山' : 'Xiangshan'}
            countDown={locale === 'zh-TW' ? '進站中' : 'Arriving'}
            showDirectionText
            isEntering={true}
          />
          <TrackInfoItem
            lineID="R"
            lineName={locale === 'zh-TW' ? '淡水信義線' : 'Tamsui-Xinyi Line'}
            stationID="R22A"
            stationName={locale === 'zh-TW' ? '新北投' : 'Xinbeitou'}
            countDown="X:XX"
            showDirectionText
          />
          <TrackInfoItem
            lineID="BL"
            lineName={locale === 'zh-TW' ? '板南線' : 'Bannan Line'}
            stationID="BL01"
            stationName={locale === 'zh-TW' ? '頂埔' : 'Dingpu'}
            countDown="X:XX"
            showDirectionText
          />
          <TrackInfoItem
            lineID="BL"
            lineName={locale === 'zh-TW' ? '板南線' : 'Bannan Line'}
            stationID="BL23"
            stationName={locale === 'zh-TW' ? '南港展覽館' : 'Taipei Nangang Exhibition Center'}
            countDown="X:XX"
            showDirectionText
          />
        </section>
      </TabsContent>
      <TabsContent value="favorite" className="flex min-h-40 items-center justify-center bg-gray-100 text-gray-400">
        {t('stops/favorite_placeholder')}
      </TabsContent>
    </Tabs>
  )
}
