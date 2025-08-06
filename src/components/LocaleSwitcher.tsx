'use client'

import { setUserLocale } from "@/lib/locale"

export function LocaleSwitcher() {
  return (
    <div>
      <button onClick={() => setUserLocale("en")}>English</button>
      <button onClick={() => setUserLocale("zh-TW")}>繁體中文</button>
    </div>
  )
}
