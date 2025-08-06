"use server"

import { cookies } from "next/headers"

type Locale = (typeof locales)[number]
const locales = ["en", "zh-TW"] as const
const defaultLocale: Locale = "zh-TW"

const COOKIE_NAME = "NEXT_LOCALE"

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale
}

export async function setUserLocale(locale: Locale) {
  ;(await cookies()).set(COOKIE_NAME, locale)
}
