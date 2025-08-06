import { getRequestConfig } from "next-intl/server"
import { getUserLocale } from "@/lib/locale"
// import { Locale, defaultLocale } from "@/i18n/request"


export default getRequestConfig(async () => {
  const locale = await getUserLocale()

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  }
})
