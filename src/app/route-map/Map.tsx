'use client'
import { useState } from 'react'
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
import { Icons } from '@/assets/svg-icons'

const stationOrigin = {
  x: '40.55%',
  y: '57.9%',
}

const mapStationData = [
  {
    name: '西門',
    travel_time: 2,
    regular_ticket: 20,
    concession_ticket: 8,
    x: -30.3,
    y: 16.8,
  },
  {
    name: '善導寺',
    travel_time: 2,
    regular_ticket: 20,
    concession_ticket: 8,
    x: 19.5,
    y: 0,
  },
  {
    name: '中山',
    travel_time: 2,
    regular_ticket: 20,
    concession_ticket: 8,
    x: 0,
    y: -35,
  },
  {
    name: '台大醫院',
    travel_time: 2,
    regular_ticket: 20,
    concession_ticket: 8,
    x: 0,
    y: 18.5,
  },
  {
    name: '北門',
    travel_time: 6,
    regular_ticket: 20,
    concession_ticket: 8,
    x: -30.3,
    y: -12,
  },
  {
    name: '小南門',
    travel_time: 6,
    regular_ticket: 20,
    concession_ticket: 8,
    x: -25,
    y: 36,
  },
  {
    name: '中正紀念堂',
    travel_time: 2,
    regular_ticket: 20,
    concession_ticket: 8,
    x: 0,
    y: 38,
  },
]

type DisplayMode = 'travel_time' | 'regular_ticket' | 'concession_ticket'

const displayModes: DisplayMode[] = ['travel_time', 'regular_ticket', 'concession_ticket']

interface MapProps {
  currentStation: string | null
  setCurrentStation: (name: string | null) => void
}

export function Map({ currentStation, setCurrentStation }: MapProps) {
  const locale = useLocale()
  const tCommon = useTranslations('Common')
  const tRouteMap = useTranslations('RouteMapPage')
  const [infoDisplayMode, setInfoDisplayMode] = useState<DisplayMode>(displayModes[0])

  return (
    <div className="relative overflow-clip">
      <div className="absolute bottom-5 left-5 z-30 flex flex-col gap-3">
        {displayModes.map((mode) => (
          <button
            key={mode}
            className={clsx(
              'text-body-bold rounded-md border border-gray-200 px-2.5 py-1 shadow-lg active:bg-gray-100',
              infoDisplayMode === mode ? 'bg-gradient-primary text-white' : 'bg-white text-gray-600'
            )}
            onClick={() => setInfoDisplayMode(mode)}
          >
            {tRouteMap(mode)}
          </button>
        ))}
      </div>

      <Link
        className="text-body-bold bg-gradient-primary absolute right-5 bottom-5 z-30 flex flex-col items-center rounded-lg p-2 text-white"
        href="/route-map/route-planning"
      >
        <Icons.RoutPlanning_Gray className="mb-1 size-6" />
        <span>{tCommon('page/route_planning')}</span>
      </Link>

      <TransformWrapper initialScale={2.5} minScale={0.5} maxScale={5} centerOnInit centerZoomedOut>
        {({ ...rest }) => (
          <TransformComponent>
            <div className="flex h-dvh max-h-[calc(100dvh-var(--height-nav-header)-var(--height-drawer))] items-center justify-center pb-24">
              <div className="relative mx-auto aspect-[4200/5500] w-[500px] min-w-[500px]">
                <Image
                  className="size-full"
                  src={locale === 'zh-TW' ? '/route-map-zhTW.jpg' : '/route-map-en.jpg'}
                  alt="Map"
                  width={4200}
                  height={5500}
                />
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: stationOrigin.x,
                    top: stationOrigin.y,
                  }}
                >
                  <button
                    className={clsx('absolute size-2 rounded-full', currentStation && 'bg-[#0197BC]')}
                    onClick={() => setCurrentStation('台北車站')}
                  />
                  {currentStation && (
                    <div className="pointer-events-none absolute size-10 rounded-full bg-[#83DEFF]/40" />
                  )}

                  {currentStation &&
                    mapStationData.map((station) => (
                      <div
                        key={station.name}
                        className="absolute flex size-2 origin-center items-center justify-center rounded-full text-[6px] font-semibold"
                        style={{
                          transform: `translate(${station.x}px, ${station.y}px)`,
                        }}
                      >
                        {station[infoDisplayMode]}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TransformComponent>
        )}
      </TransformWrapper>
    </div>
  )
}
