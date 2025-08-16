import { useTranslations } from 'next-intl'
import { NavHeader } from '@/components/NavHeader'
import { getStationInfosByName } from '@/lib/StationOfLineData'

export default function StationMapPage() {
  const tCommon = useTranslations('Common')
  const tRouteMap = useTranslations('RouteMapPage')

  const stationName = '台北車站'
  const stationInfo = getStationInfosByName(stationName)

  return (
    stationInfo && (
      <div className="pb-navbar min-h-dvh">
        <NavHeader title={tCommon('page/station_map')} />

        <p>{stationInfo[0].lineID}</p>
        <p>{stationInfo[0].stationName['zh-TW']}</p>
      </div>
    )
  )
}
