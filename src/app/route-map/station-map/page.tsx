import { useLocale, useTranslations } from 'next-intl'
import { NavHeader } from '@/components/NavHeader'
import { ResponsiveDrawer } from '@/components/ResponsiveDrawer'
import { StationIdBadge } from '@/components/StationIdBadge'
import metroLinesData from '@/lib/MetroLineData'
import { getStationInfosByName } from '@/lib/StationOfLineData'
import { Locale } from '@/lib/types'
import { Icons } from '@/assets/svg-icons'
import { ThreeDMap } from './ThreeDMap'

export default function StationMapPage() {
  const locale = useLocale() as Locale
  const tCommon = useTranslations('Common')
  const tRouteMap = useTranslations('RouteMapPage')

  const stationName = '台北車站'
  const stationInfos = getStationInfosByName(stationName)

  return (
    stationInfos && (
      <div className="pb-navbar min-h-dvh">
        <NavHeader title={tCommon('page/station_map')} />

        <ThreeDMap />

        <ResponsiveDrawer maxHeightRatio={0.5}>
          <section className="flex items-center gap-3.5">
            <div className="flex gap-1.5">
              {stationInfos.map((info) => (
                <StationIdBadge key={info.stationID} lineID={info.lineID} stationID={info.stationID} />
              ))}
            </div>
            <div>
              <p className="text-caption mt-px">
                {stationInfos.map((info, index) => (
                  <span key={info.stationID}>
                    <span key={info.stationID}>{metroLinesData[info.lineID].name[locale]}</span>
                    {index < stationInfos.length - 1 && <span>、</span>}
                  </span>
                ))}
              </p>
              <h3 className="text-sm">{stationInfos[0].stationName[locale]}</h3>
            </div>
          </section>

          <section>
            <Icons.ChevronRight className="size-6" />
            {/* TODO: 旋轉按鈕 */}
          </section>
        </ResponsiveDrawer>
      </div>
    )
  )
}
