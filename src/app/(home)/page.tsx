'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Icons } from '@/assets/icons'
import logoImg from '@/assets/logo.png'
import { showNotImplementedToast } from '@/lib/utils'
import { AdCarousel } from './AdCarousel'
import { FavoriteFeature } from './FavoriteFeature'
import { TrackInfos } from './TrackInfos'

export default function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <div className="pb-navbar">
      <div className="flex items-center justify-between px-6 py-5">
        <Image src={logoImg} alt="Logo" width={130} height={21} />
        <button type="button" onClick={showNotImplementedToast}>
          <Icons.Bell className="size-[23px]" />
        </button>
      </div>

      {/* 廣播跑馬燈 */}
      <div className="flex w-full items-center pl-6">
        <Icons.Sound className="size-6" />
        <div className="ml-2 w-full overflow-hidden">
          <div className="animate-marquee text-body min-w-fit whitespace-nowrap">{t('broadcast_message')}</div>
        </div>
      </div>

      {/* 廣告輪播 */}
      <section className="mx-6 mt-4">
        <AdCarousel />
      </section>

      {/* 我的票卡 */}
      <section className="mx-6 mt-2.5 flex h-24 justify-between text-gray-900">
        <div className="from-primary-blue/10 to-primary-green/10 relative w-full rounded-xl bg-gradient-to-r px-3 py-2.5">
          <div className="flex items-center gap-0.5">
            <span className="text-caption">{t('my_card/title')}</span>
            <Icons.ChevronRight className="size-[15px]" />
          </div>
          <p className="text-body mt-1">Easy card 0000008642</p>

          <div className="absolute top-4.5 right-6 flex items-end">
            <span className="text-caption mb-[5px]">{t('my_card/dollars_left')}</span>
            <span className="text-heading-bold mr-1 ml-1.5">350</span>
            <span className="text-caption mb-[5px]">{t('my_card/dollars_right')}</span>
          </div>

          <div className="absolute right-6 bottom-2.5 flex items-center">
            <span className="text-body text-gradient-primary">{t('my_card/rides')}</span>
            <span className="text-body-bold text-gradient-primary">18</span>
            <div className="from-primary-blue to-primary-green mx-3.5 h-5 w-px bg-black bg-gradient-to-b" />
            <span className="text-body text-gradient-primary mr-0.5">{t('my_card/co2_reduced')}</span>
            <span className="text-body-bold text-gradient-primary">5,568.4g</span>
          </div>
        </div>

        <div
          className="from-primary-blue/10 to-primary-green/10 relative flex w-[66px] shrink-0 flex-col items-center rounded-xl bg-gradient-to-r pt-5 hover:cursor-pointer"
          onClick={showNotImplementedToast}
        >
          <div className="border-primary-blue absolute top-2.5 left-0 h-[76px] -translate-x-1/2 border-l border-dashed" />
          <Icons.Coupon className="size-[34px]" />
          <span className="text-body-bold mt-0.5">{t('my_card/coupons')}</span>
        </div>
      </section>

      {/* 常用功能 */}
      <section className="mx-6 mt-9">
        <FavoriteFeature />
      </section>

      {/* 站點資訊 */}
      <section className="mx-6 mt-2.5">
        <TrackInfos />
      </section>
    </div>
  )
}
