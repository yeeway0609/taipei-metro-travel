import type { MetroLineID } from '@/lib/types'
import metroLinesData from '@/lib/MetroLineData'
import clsx from 'clsx'

interface TrackInfoItemProps {
  lineID: MetroLineID
  lineName: string
  stationSequence: number
  stationName: string
  countDown: string
  isEntering?: boolean
}

export function TrackInfoItem({
  lineID,
  lineName,
  stationName,
  stationSequence,
  countDown,
  isEntering = false,
}: TrackInfoItemProps) {
  const lineData = metroLinesData.find((line) => line.id === lineID)

  return (
    lineData && (
      <div className="flex items-center gap-2.5">
        <time
          className={clsx(
            'text-title-bold flex h-[30px] w-20 items-center justify-center rounded-[100px] border-[1.5px]',
            isEntering ? 'border-[#DC2626] text-[#DC2626]' : 'border-[#727272] text-[#727272]'
          )}
        >
          {isEntering ? '進站中' : countDown}
        </time>

        <div
          className="text-caption-bold flex w-5 flex-col items-center justify-center gap-1 rounded-[6px] py-0.5 text-white"
          style={{ backgroundColor: lineData.color }}
        >
          <span>{lineID}</span>
          <span>{stationSequence.toString().padStart(2, '0')}</span>
        </div>

        <div className="pt-0.5">
          <p className="text-caption">{lineName}</p>
          <p className="text-body-bold mt-px">{stationName}</p>
        </div>
      </div>
    )
  )
}
