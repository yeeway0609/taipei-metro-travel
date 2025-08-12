'use client'
import { useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Icons } from '@/assets/icons'
import { NavHeader } from '@/components/NavHeader'
import { ResponsiveDrawer } from '@/components/ResponsiveDrawer'
import { StationIdBadge } from '@/components/StationIdBadge'
import { StationMapButton } from '@/components/StationMapButton'
import { getStationInfosByName } from '@/lib/StationOfLineData'
import metroLinesData from '@/lib/MetroLineData'
import { Locale } from '@/lib/types'

export default function RouteMapPage() {
  const locale = useLocale() as Locale
  const tCommon = useTranslations('Common')
  const tRouteMap = useTranslations('RouteMapPage')
  const [searchInput, setSearchInput] = useState('')
  const [currentStationName, setCurrentStationName] = useState<string | null>(null)

  const stationInfos = useMemo(() => {
    if (!currentStationName) return null
    const stationInfos = getStationInfosByName(currentStationName)
    if (!stationInfos) return null
    return stationInfos
  }, [currentStationName])

  return (
    <div className="pb-navbar min-h-dvh bg-[#F7F7F7]">
      <NavHeader title={tCommon('page/route_map')} />

      <ResponsiveDrawer>
        {!currentStationName && (
          <>
            <input
              className="text-body placeholder:text-body mx-auto w-full max-w-[260px] rounded-[100px] bg-gray-100 px-5 py-2 outline-0"
              type="text"
              placeholder={tRouteMap('search_placeholder')}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            {searchInput.length > 0 && (
              <>
                <button
                  className="mx-auto mt-6 flex w-full max-w-[280px] items-center justify-between border-b border-gray-200 p-2"
                  onClick={() => setCurrentStationName('台北車站')}
                >
                  <span className="text-title">台北車站 Taipei Main Station</span>
                  <Icons.ChevronRight className="size-[21px]" />
                </button>
                <button className="mx-auto mt-6 flex w-full max-w-[280px] items-center justify-between border-b border-gray-200 p-2">
                  <span className="text-title">XXXXXX</span>
                  <Icons.ChevronRight className="size-[21px]" />
                </button>
              </>
            )}
          </>
        )}

        {currentStationName && stationInfos && (
          <>
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
            <TitleItem title={tRouteMap('train_status')} />
            <TitleItem title={tCommon('page/station_map')} />
            <StationMapButton className="mx-auto w-full max-w-60" stationName={currentStationName} />
            <TitleItem title={tRouteMap('first_and_last_train')} />
            <TitleItem title={tRouteMap('ubike_stations')} />
          </>
        )}
      </ResponsiveDrawer>
    </div>
  )
}

function TitleItem({ title }: { title: string }) {
  return <h3 className="text-title-bold border-gay-200 mt-4 mb-3 border-b py-1.5">{title}</h3>
}
