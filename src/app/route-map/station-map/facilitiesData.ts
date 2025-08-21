import { MapIcons } from '@/assets/station-map-icons'
import type { Locale } from '@/lib/types'

export type FacilityType = keyof typeof MapIcons

export const facilityTypes: Record<FacilityType, Record<Locale, string>> = {
  Toilet: {
    'en': 'Toilet',
    'zh-TW': '廁所',
  },
  Locker: {
    'en': 'Locker',
    'zh-TW': '置物櫃',
  },
  Escalator: {
    'en': 'Escalator',
    'zh-TW': '電扶梯',
  },
  Elevator: {
    'en': 'Elevator',
    'zh-TW': '電梯',
  },
  Telephone: {
    'en': 'Telephone',
    'zh-TW': '公共電話',
  },
  AED: {
    'en': 'AED',
    'zh-TW': '自動體外心臟去顫器',
  },
}

type Floor = 'b1' | 'b2' | 'b3' | 'b4'

type Facility = {
  uid: string // 等於對應的 mesh name (但是不一定會有 mesh)
  name: string // 顯示名稱，例如：廁所、置物櫃、電梯
  floor: Floor
  type: FacilityType
  position: [number, number, number]
  description: Record<Locale, string>
}

export const facilitiesData: Facility[] = [
  {
    uid: 'b1-toilet-1',
    name: '廁所 1',
    floor: 'b1',
    type: 'Toilet',
    position: [-1.5, -1.5, 2],
    description: {
      'en': 'Toilet',
      'zh-TW': '廁所',
    },
  },
  {
    uid: 'b1-toilet-2',
    name: '廁所 2',
    floor: 'b1',
    type: 'Toilet',
    position: [-5.5, -4, 6.3],
    description: {
      'en': 'XXXXXX',
      'zh-TW': 'XXXXXX',
    },
  },
  {
    uid: 'b1-toilet-3',
    name: '廁所 3',
    floor: 'b1',
    type: 'Toilet',
    position: [-5.3, -7, 1],
    description: {
      'en': 'XXXXXX',
      'zh-TW': 'XXXXXX',
    },
  },
  {
    uid: 'b1-toilet-4',
    name: '廁所 4',
    floor: 'b1',
    type: 'Toilet',
    position: [1.4, -3, -0.5],
    description: {
      'en': 'XXXXXX',
      'zh-TW': 'XXXXXX',
    },
  },
  {
    uid: 'b2-toilet-1',
    name: '廁所 1',
    floor: 'b2',
    type: 'Toilet',
    position: [5, -8, -1.3],
    description: {
      'en': 'XXXXXX',
      'zh-TW': 'XXXXXX',
    },
  },
  {
    uid: 'b3-toilet-1',
    name: '廁所 1',
    floor: 'b3',
    type: 'Toilet',
    position: [-0.4, -6, 3.5],
    description: {
      'en': 'XXXXXX',
      'zh-TW': 'XXXXXX',
    },
  },
  {
    uid: 'b3-toilet-2',
    name: '廁所 2',
    floor: 'b3',
    type: 'Toilet',
    position: [4, -9, 1.5],
    description: {
      'en': 'XXXXXX',
      'zh-TW': 'XXXXXX',
    },
  },

  {
    uid: 'b1-locker-1',
    name: '置物櫃 1',
    floor: 'b1',
    type: 'Locker',
    position: [2.5, -3, 0.3],
    description: {
      'en': 'XXXXXX',
      'zh-TW': 'XXXXXX',
    },
  },
  {
    uid: 'b1-locker-2',
    name: '置物櫃 2',
    floor: 'b1',
    type: 'Locker',
    position: [2.8, -3, -0.5],
    description: {
      'en': 'XXXXXX',
      'zh-TW': 'XXXXXX',
    },
  },
]
