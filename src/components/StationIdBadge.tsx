import { metroLineColors } from '@/lib/MetroLineData'
import type { MetroLineID } from '@/lib/types'
import clsx from 'clsx'

interface StationIdBadgeProps {
  lineID: MetroLineID
  stationID: string
  className?: string
}

export function StationIdBadge({ stationID, lineID, className }: StationIdBadgeProps) {
  return (
    <div
      className={clsx(
        'text-caption-bold flex h-8 w-6 flex-col items-center justify-center gap-0.5 rounded-[6px] py-[3px] text-white',
        className
      )}
      style={{ backgroundColor: metroLineColors[lineID] }}
    >
      <span>{lineID}</span>
      <span>{stationID.replace(lineID, '')}</span>
    </div>
  )
}
