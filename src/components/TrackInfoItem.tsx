import type { MetroLineID } from '@/lib/types'
import metroLinesData from '@/lib/MetroLineData'
import clsx from 'clsx'
import { StationIdBadge } from './StationIdBadge'

interface TrackInfoItemProps {
  lineID: MetroLineID
  lineName: string
  stationID: string
  stationName: string
  countDown: string
  isEntering?: boolean
  showDirectionText?: boolean
}

export function TrackInfoItem({
  lineID,
  lineName,
  stationName,
  stationID,
  countDown,
  isEntering = false,
  showDirectionText = false,
}: TrackInfoItemProps) {
  const lineData = metroLinesData.find((line) => line.id === lineID)

  return (
    lineData && (
      <div className="flex items-center gap-2.5">
        <time
          className={clsx(
            'text-title-bold flex h-[30px] w-24 items-center justify-center rounded-[100px] border-[1.5px] pb-px',
            isEntering ? 'border-[#DC2626] text-[#DC2626]' : 'border-[#727272] text-[#727272]'
          )}
        >
          {isEntering ? '進站中' : countDown}
        </time>

        {showDirectionText && <span className="text-caption">往</span>}

        <StationIdBadge lineID={lineID} stationID={stationID} />

        <div className="pt-0.5">
          <p className="text-caption">{lineName}</p>
          <p className="text-body-bold mt-px">{stationName}</p>
        </div>
      </div>
    )
  )
}
