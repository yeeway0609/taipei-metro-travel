import { redirect } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { NavHeader } from '@/components/NavHeader'
import { getStationInfosByName } from '@/lib/StationOfLineData'
import { ThreeDMap } from './ThreeDMap'

export default async function StationMapPage({ params }: { params: Promise<{ stationName: string }> }) {
  const tCommon = await getTranslations('Common')
  const tRouteMap = await getTranslations('RouteMapPage')

  const rawStationName = (await params).stationName
  const stationName = decodeURIComponent(rawStationName)
  const stationInfo = getStationInfosByName(stationName)

  if (!stationInfo) {
    return redirect('/route-map')
  }

  return (
    <div className="pb-navbar min-h-dvh">
      <NavHeader title={tCommon('page/station_map')} />

      <ThreeDMap />
    </div>
  )
}
