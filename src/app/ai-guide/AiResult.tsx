import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { showNotImplementedToast } from '@/lib/utils'
import spotImg from '@/assets/中正紀念堂.png'
import { RoutePlanDrawer } from '@/components/RoutePlanDrawer'

export function AiResult({ setShowResult }: { setShowResult: (show: boolean) => void }) {
  const tAiGuide = useTranslations('AiGuidePage')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="px-7">
      <div className="mx-auto mt-6 overflow-hidden rounded-xl bg-white">
        <Image className="w-full object-cover" src={spotImg} alt="" />
        <div className="space-y-2 px-6 pt-3 pb-5">
          <h2 className="text-title-bold">{tAiGuide('spot_name')}</h2>
          <p className="text-caption">{tAiGuide('spot_address')}</p>
          <p className="text-caption">{tAiGuide('spot_opening_hours')} </p>
        </div>
      </div>

      <div className="text-caption mt-7 flex flex-col items-center gap-4 pb-5 leading-normal">
        <button
          className="from-primary-blue/20 to-primary-green/20 w-full max-w-56 rounded bg-gradient-to-r px-1 py-1.5"
          onClick={() => setIsDrawerOpen(true)}
        >
          {tAiGuide('route_plan')}
        </button>

        <button
          className="border-primary-green w-full max-w-56 rounded border bg-white px-1 py-1.5"
          onClick={showNotImplementedToast}
        >
          {tAiGuide('spot_intro')}
        </button>

        <button
          className="border-primary-green w-full max-w-56 rounded border bg-white px-1 py-1.5"
          onClick={showNotImplementedToast}
        >
          {tAiGuide('spot_goods')}
        </button>

        <button
          className="mt-5 w-full max-w-56 rounded border border-red-600 bg-white px-1 py-1.5 text-red-600"
          onClick={() => setShowResult(false)}
        >
          {tAiGuide('reupload_photo')}
        </button>
      </div>

      <RoutePlanDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </div>
  )
}
