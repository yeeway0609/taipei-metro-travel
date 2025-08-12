'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { NavHeader } from '@/components/NavHeader'
import { ResponsiveDrawer } from '@/components/ResponsiveDrawer'
import { Icons } from '@/assets/icons'

export default function RouteMapPage() {
  const tCommon = useTranslations('Common')
  const tRouteMap = useTranslations('RouteMapPage')

  const [searchInput, setSearchInput] = useState('')
  const [currentStationName, setCurrentStationName] = useState<string | null>(null)

  return (
    <div className="pb-navbar min-h-dvh bg-[#F7F7F7]">
      <NavHeader title={tCommon('page/route_map')} />

      <ResponsiveDrawer>
        {!currentStationName ? (
          <>
            <input
              className="text-body placeholder:text-body mx-auto w-full max-w-[260px] rounded-[100px] bg-gray-100 px-5 py-2 outline-0"
              type="text"
              placeholder="點擊地圖上的車站或是打字搜尋"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            {searchInput.length > 0 && (
              <button
                className="mx-auto mt-6 flex w-full max-w-[280px] items-center justify-between border-b border-gray-200 p-2"
                onClick={() => setCurrentStationName('台北車站')}
              >
                <span className="text-title">台北車站 Taipei Main Station</span>
                <Icons.ChevronRight className="size-[21px]" />
              </button>
            )}
          </>
        ) : (
          <div>{currentStationName}</div>
        )}
      </ResponsiveDrawer>
    </div>
  )
}
