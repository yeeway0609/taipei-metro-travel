'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { NavHeader } from '@/components/NavHeader'
import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer'
import chevronIcon from '@/assets/chevron-right.svg'
import { showNotImplementedToast } from '@/lib/utils'
import { setUserLocale } from '@/i18n/locale'
import type { Locale } from '@/lib/types'

export default function ProfilePage() {
  const tCommon = useTranslations('Common')
  const tProfile = useTranslations('ProfilePage')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function handleLanguageChange(language: Locale) {
    setUserLocale(language)
    setIsDrawerOpen(false)
  }

  return (
    <div className="pb-navbar min-h-dvh bg-gray-200">
      <NavHeader title={tCommon('page/profile')} />

      <div className="p-8">
        <section className="flex px-4">
          <div className="size-12 rounded-full bg-amber-300" />
          <div className="ml-3">
            <p className="text-caption mt-1 mb-2">Welcome Back!</p>
            <p className="text-title-bold">CC</p>
          </div>
        </section>

        <section className="mt-9">
          <h2 className="text-caption px-6">{tProfile('label_member_service')}</h2>
          <div className="mt-2 space-y-2">
            <FeatureItem title={tProfile('my_account')} onClick={showNotImplementedToast} />
            <FeatureItem title={tProfile('passenger_service')} onClick={showNotImplementedToast} />
          </div>
        </section>

        <section className="mt-9">
          <h2 className="text-caption px-6">{tProfile('label_other')}</h2>
          <div className="mt-2 space-y-2">
            <FeatureItem title={tProfile('faq')} onClick={showNotImplementedToast} />
            <FeatureItem title={tProfile('laws_and_terms')} onClick={showNotImplementedToast} />
            <FeatureItem title={tProfile('emergency_contact_information')} onClick={showNotImplementedToast} />
            <FeatureItem title={tProfile('notification_settings')} onClick={showNotImplementedToast} />
            <FeatureItem title={tProfile('language_settings')} onClick={() => setIsDrawerOpen(true)} />

            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerContent className="pb-8">
                <DrawerTitle></DrawerTitle>
                <button
                  className="border-border bg-accent mt-5 border px-5 py-2"
                  type="button"
                  onClick={() => handleLanguageChange('zh-TW')}
                >
                  {tProfile('zhTW')}
                </button>
                <button
                  className="border-border bg-accent border-b px-5 py-2"
                  type="button"
                  onClick={() => handleLanguageChange('en')}
                >
                  {tProfile('en')}
                </button>
              </DrawerContent>
            </Drawer>
          </div>
        </section>
      </div>
    </div>
  )
}

function FeatureItem({ title, onClick }: { title: string; onClick?: () => void }) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-lg bg-white py-3 pr-3 pl-6"
      onClick={onClick}
    >
      <span className="text-title">{title}</span>
      <Image className="size-6" src={chevronIcon} width={24} height={24} alt="" />
    </div>
  )
}
