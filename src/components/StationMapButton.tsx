import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import mapIcon from '@/assets/map.svg'
import { useTranslations } from 'next-intl'

interface StationMapButtonProps {
  stationName: string
  className?: string
}

export function StationMapButton({ stationName, className }: StationMapButtonProps) {
  const t = useTranslations('Common')

  return (
    <Link
      className={clsx(
        'from-primary-green/20 to-primary-blue/20 flex items-center justify-center gap-1 rounded-lg bg-gradient-to-r px-4 py-2.5',
        className
      )}
      href={`/route-map/station-map/${stationName}`}
    >
      <Image src={mapIcon} alt="Map Icon" width={24} height={24} />
      <span className="text-title">{t('page/station_map')}</span>
    </Link>
  )
}
