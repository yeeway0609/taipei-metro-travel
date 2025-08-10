import { useTranslations } from 'next-intl'
import { StationIdBadge } from '@/components/StationIdBadge'
import Image from 'next/image'
import mapIcon from '@/assets/map.svg'
import { MetroLineID } from '@/lib/types'

interface RoutePlanItemProps {
  lineID: MetroLineID
  stationID: string
  lineName: string
  stationName: string
  entranceNumber: number
  departureTimeLeft: number
  arrivalTime: string
  showLine?: boolean
}

export function RoutePlanItem({
  lineID,
  stationID,
  lineName,
  stationName,
  entranceNumber,
  departureTimeLeft,
  arrivalTime,
  showLine = false,
}: RoutePlanItemProps) {
  const t = useTranslations('RoutePlanDrawer')

  function handleMapClick() {
    // TODO: nav to station map
  }

  return (
    <section className="flex h-40">
      <div className="relative">
        {showLine && <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-gray-200" />}
        <StationIdBadge className="relative" lineID={lineID} stationID={stationID} />
      </div>

      <div className="ml-4">
        <p className="text-caption mt-1">{lineName}</p>
        <p className="text-title-bold mt-3">{stationName}</p>
        <p className="text-body mt-4">{t('entrance', { number: entranceNumber })}</p>
        <p className="text-body mt-3">
          {t('estimated_departure_minutes', { count: departureTimeLeft })}·{t('departure_platform', { number: 1 })}
        </p>
      </div>

      <div className="ml-auto flex shrink-0 flex-col items-center">
        <button
          className="from-primary-green/20 to-primary-blue/20 flex items-center gap-1 rounded-xl bg-gradient-to-r px-4 py-2.5"
          onClick={handleMapClick}
        >
          <Image src={mapIcon} alt="Map Icon" width={24} height={24} />
          <span className="text-title">{t('station_map')}</span>
        </button>

        <p className="text-caption mt-6">{t('estimated_arrival_time')}</p>
        <p className="mt-2 text-xl font-bold">{arrivalTime}</p>
      </div>
    </section>
  )
}
