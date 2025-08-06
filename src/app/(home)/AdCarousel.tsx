'use client'
import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const ads = [
  {
    title: 'Ad 1',
    bgColor: 'bg-emerald-300',
  },
  {
    title: 'Ad 2',
    bgColor: 'bg-sky-300',
  },
  {
    title: 'Ad 3',
    bgColor: 'bg-rose-300',
  },
]

export function AdCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <>
      <div className="embla w-full" ref={emblaRef}>
        <div className="embla__container gap-0.5">
          {ads.map((ad, index) => (
            <div
              key={index}
              className={clsx('embla__slide flex h-32 items-center justify-center rounded-xl', ad.bgColor)}
            >
              {ad.title}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {ads.map((_, index) => (
          <div
            key={index}
            className={clsx('h-1.5 rounded-2xl', selectedIndex === index ? 'w-9 bg-gray-900' : 'w-3 bg-gray-300')}
          />
        ))}
      </div>
    </>
  )
}
