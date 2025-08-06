import Image from "next/image"
import { useTranslations } from "next-intl"
import { LocaleSwitcher } from "@/components/LocaleSwitcher"

export default function Home() {
  const t = useTranslations("HomePage")

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>{t("title")}</h1>
      <LocaleSwitcher />
    </div>
  )
}
