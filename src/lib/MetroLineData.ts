import type { MetroLineID } from '@/lib/types'
import { Locale } from '@/lib/types'

interface MetroLine {
  id: MetroLineID
  name: Record<Locale, string>
  color: string
}

export const metroLineColors: Record<MetroLineID, string> = {
  BR: '#b57a25',
  R: '#d90023',
  G: '#107547',
  O: '#ee6b00',
  BL: '#1670b9',
}

const metroLinesData: Record<MetroLineID, MetroLine> = {
  BR: {
    id: 'BR',
    name: {
      'zh-TW': '文湖線',
      'en': 'Wenhu Line',
    },
    color: metroLineColors.BR,
  },
  R: {
    id: 'R',
    name: {
      'zh-TW': '淡水信義線',
      'en': 'Tamsui-Xinyi Line',
    },
    color: metroLineColors.R,
  },
  G: {
    id: 'G',
    name: {
      'zh-TW': '松山新店線',
      'en': 'Songshan-Xindian Line',
    },
    color: metroLineColors.G,
  },
  O: {
    id: 'O',
    name: {
      'zh-TW': '中和新蘆線',
      'en': 'Zhonghe-Xinlu Line',
    },
    color: metroLineColors.O,
  },
  BL: {
    id: 'BL',
    name: {
      'zh-TW': '板南線',
      'en': 'Bannan Line',
    },
    color: metroLineColors.BL,
  },
  // Y: {
  //   id: 'Y',
  //   name: {
  //     'zh-TW': '環狀線',
  //     en: 'Circular Line',
  //   },
  //   color: '#ffd21e',
  // },
}

export default metroLinesData
