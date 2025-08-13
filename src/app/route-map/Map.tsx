'use client'
import Image from 'next/image'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import clsx from 'clsx'

const stationOrigin = {
  x: '40.55%',
  y: '57.9%',
}

const mapStationData = [
  {
    name: '西門',
    time: 2,
    price: 20,
    x: -30.3,
    y: 16.8,
  },
  {
    name: '善導寺',
    time: 2,
    price: 20,
    x: 19.5,
    y: 0,
  },
]

interface MapProps {
  currentStation: string | null
  setCurrentStation: (name: string | null) => void
}

export function Map({ currentStation, setCurrentStation }: MapProps) {
  return (
    <div className="relative overflow-clip">
      <div className="absolute bottom-5 left-5 z-30 flex flex-col gap-3">
        <button className="text-title-bold rounded-md bg-white px-2.5 py-1 shadow-lg active:bg-gray-100">時間</button>
        <button className="text-title-bold rounded-md bg-white px-2.5 py-1 shadow-lg active:bg-gray-100">票價</button>
      </div>

      <TransformWrapper initialScale={2.5} minScale={0.5} maxScale={5} centerOnInit>
        {({ ...rest }) => (
          <TransformComponent>
            <div className="flex h-dvh max-h-[calc(100dvh-var(--height-nav-header)-var(--height-drawer))] items-center justify-center">
              <div className="relative aspect-[4200/5500] w-[500px] min-w-[500px]">
                <Image className="size-full" src="/route-map-zhTW.jpg" alt="Map" width={4200} height={5500} />
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: stationOrigin.x,
                    top: stationOrigin.y,
                  }}
                >
                  <button
                    className={clsx('absolute size-2 rounded-full', currentStation === '台北車站' && 'bg-[#0197BC]')}
                    onClick={() => setCurrentStation('台北車站')}
                  />
                  {currentStation === '台北車站' && (
                    <div className="pointer-events-none absolute size-10 rounded-full bg-[#83DEFF]/40" />
                  )}

                  {mapStationData.map((station) => (
                    <div
                      key={station.name}
                      className="absolute flex size-2 origin-center items-center justify-center rounded-full text-[6px] font-semibold"
                      style={{
                        transform: `translate(${station.x}px, ${station.y}px)`,
                      }}
                    >
                      {station.time}
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
