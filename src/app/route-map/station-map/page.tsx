'use client'
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { NavHeader } from '@/components/NavHeader'
import { ResponsiveDrawer } from '@/components/ResponsiveDrawer'
import { StationIdBadge } from '@/components/StationIdBadge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import metroLinesData from '@/lib/MetroLineData'
import { getStationInfosByName } from '@/lib/StationOfLineData'
import { Locale } from '@/lib/types'
import { ThreeDMap } from './ThreeDMap'
import { FacilityType, facilityTypes, facilitiesData } from './facilitiesData'

export default function StationMapPage() {
  const locale = useLocale() as Locale
  const tCommon = useTranslations('Common')
  const tRouteMap = useTranslations('RouteMapPage')
  const [currentFacilityType, setCurrentFacilityType] = useState<FacilityType | ''>('')

  const stationName = '台北車站'
  const stationInfos = getStationInfosByName(stationName)

  return (
    stationInfos && (
      <div className="pb-navbar min-h-dvh">
        <NavHeader title={tCommon('page/station_map')} />

        <ThreeDMap currentFacilityType={currentFacilityType} setCurrentFacilityType={setCurrentFacilityType} />

        <ResponsiveDrawer maxHeightRatio={0.5}>
          <section className="mb-3 flex items-center gap-3.5">
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

          <Select
            value={currentFacilityType as string}
            onValueChange={(value) => setCurrentFacilityType(value as FacilityType)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={tRouteMap('facility_select_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(facilityTypes).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value[locale]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="mt-3 flex flex-col gap-3 px-2">
            {facilitiesData
              .filter((facility) => facility.type === currentFacilityType)
              .map((facility) => (
                <div key={facility.uid} className="flex items-center">
                  <div className="text-title-bold flex h-[30px] w-24 shrink-0 items-center justify-center rounded-[100px] border-[1.5px] border-[#727272] pb-px text-[#727272]">
                    {tRouteMap('facility_left')}
                  </div>
                  <p className="text-title ml-3">{`${facility.floor.toUpperCase()}F`}</p>
                  <p className="text-title-bold ml-3">{facility.name}</p>
                </div>
              ))}
          </div>
        </ResponsiveDrawer>
      </div>
    )
  )
}
