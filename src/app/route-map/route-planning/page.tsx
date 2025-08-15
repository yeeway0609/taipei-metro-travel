'use client'
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { NavHeader } from '@/components/NavHeader'
import { RoutePlanDrawer } from '@/components/RoutePlanDrawer'
import { Icons } from '@/assets/svg-icons'

export default function RoutePlanningPage() {
  const locale = useLocale()
  const tCommon = useTranslations('Common')
  const tRouteMap = useTranslations('RouteMapPage')
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  const [departureInput, setDepartureInput] = useState(locale === 'zh-TW' ? '象山' : 'Xiangshan')
  const [destinationInput, setDestinationInput] = useState(locale === 'zh-TW' ? '中正紀念堂' : 'CKS Memorial Hall')

  function switchInputText() {
    setDestinationInput(departureInput)
    setDepartureInput(destinationInput)
  }

  return (
    <div className="pb-navbar min-h-dvh bg-gray-200">
      <NavHeader title={tCommon('page/route_planning')} />

      <section className="p-4">
        <div className="mx-auto flex w-full max-w-80 items-center justify-between gap-2.5 rounded-2xl bg-white p-3">
          <Icons.LocationMarker />
          <div className="text-body flex-1 placeholder:text-gray-700">
            <input
              className="w-full rounded-[100px] border-none bg-gray-100 px-3 py-2 outline-none"
              type="text"
              placeholder={tRouteMap('planning_departure')}
              value={departureInput}
              onChange={(e) => setDepartureInput(e.target.value)}
            />
            <input
              className="mt-2.5 w-full rounded-[100px] border-none bg-gray-100 px-3 py-2 outline-none"
              type="text"
              placeholder={tRouteMap('planning_destination')}
              value={destinationInput}
              onChange={(e) => setDestinationInput(e.target.value)}
            />
          </div>
          <Icons.Transfer onClick={switchInputText} />
        </div>
      </section>

      <RoutePlanDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} hasOverlay={false} />
    </div>
  )
}
