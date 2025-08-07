import { metroLineColors } from '@/lib/MetroLineData'
import type { MetroLineID } from '@/lib/types'

interface StationIdBadgeProps {
  lineID: MetroLineID
  stationID: string
}

export function StationIdBadge({ stationID, lineID }: StationIdBadgeProps) {
  return (
    <div
      className="text-caption-bold flex w-6 flex-col items-center justify-center gap-0.5 rounded-[6px] py-[3px] text-white"
      style={{ backgroundColor: metroLineColors[lineID] }}
    >
      <span>{lineID}</span>
      <span>{stationID.replace(lineID, '')}</span>
    </div>
  )
}
