const locales = ['en', 'zh-TW'] as const

export type Locale = (typeof locales)[number]

export type MetroLineID = 'BR' | 'R' | 'G' | 'O' | 'BL' // TOFIX: 先移除環狀線 Y

export type TrainDirection = 'ToFinal' | 'ToFirst' | 'Unknown'
