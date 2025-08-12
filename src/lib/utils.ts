import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { toast } from 'sonner'
import stationOfLineData from '@/lib/StationOfLineData'
import type { TrainDirection } from '@/lib/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function showNotImplementedToast() {
  toast.error('Demo 無此功能')
}

export function getTrainDirection(
  lineID: string,
  currentStationName: string,
  destinationStationName: string
): TrainDirection {
  const line = stationOfLineData.find((line) => line.lineID === lineID)
  if (!line) return 'Unknown'

  const current = line.stations.find(
    (s) => s.stationName['zh-TW'].replace('站', '') === currentStationName.replace('站', '')
  )
  const destination = line.stations.find(
    (s) => s.stationName['zh-TW'].replace('站', '') === destinationStationName.replace('站', '')
  )

  if (!current || !destination) return 'Unknown'

  if (destination.sequence > current.sequence) return 'ToFinal'
  if (destination.sequence < current.sequence) return 'ToFirst'

  return 'Unknown'
}
