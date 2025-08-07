import type { MetroLineID } from '@/lib/types'

interface MetroLine {
  id: MetroLineID
  name: {
    zhTW: string
    en: string
  }
  color: string
}

const metroLinesData: MetroLine[] = [
  {
    id: 'BR',
    name: {
      zhTW: '文湖線',
      en: 'Wenhu Line',
    },
    color: '#b57a25',
  },
  {
    id: 'R',
    name: {
      zhTW: '淡水信義線',
      en: 'Tamsui-Xinyi Line',
    },
    color: '#d90023',
  },
  {
    id: 'G',
    name: {
      zhTW: '松山新店線',
      en: 'Songshan-Xindian Line',
    },
    color: '#107547',
  },
  {
    id: 'O',
    name: {
      zhTW: '中和新蘆線',
      en: 'Zhonghe-Xinlu Line',
    },
    color: '#ee6b00',
  },
  {
    id: 'BL',
    name: {
      zhTW: '板南線',
      en: 'Bannan Line',
    },
    color: '#1670b9',
  },
  // {
  //   id: 'Y',
  //   name: {
  //     zhTW: '環狀線',
  //     en: 'Circular Line',
  //   },
  //   color: '#ffd21e',
  // },
]

export default metroLinesData
