import Link from 'next/link'
import clsx from 'clsx'
import { Icons } from '@/assets/svg-icons'
import { useTranslations } from 'next-intl'

interface StationMapButtonProps {
  stationName: string
  className?: string
}

// EXPLAIN: demo 只會導到台北車站
export function StationMapButton({ stationName, className }: StationMapButtonProps) {
  const t = useTranslations('Common')

  return (
    <Link
      className={clsx(
        'from-primary-green/20 to-primary-blue/20 flex items-center justify-center gap-1 rounded-lg bg-gradient-to-r px-4 py-2.5',
        className
      )}
      href={`/route-map/station-map`}
    >
      <Icons.Map className="size-6" />
      <span className="text-title">{t('page/station_map')}</span>
    </Link>
  )
}
