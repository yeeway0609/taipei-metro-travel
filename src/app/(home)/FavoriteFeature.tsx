import { useTranslations } from 'next-intl'
import markerIcon from '@/assets/home/marker.svg'
import routeIcon from '@/assets/home/route.svg'
import aiIcon from '@/assets/home/ai.svg'
import giftIcon from '@/assets/home/gift.svg'
import Image from 'next/image'

const features = [
  {
    name: 'travel_time_fare',
    icon: markerIcon,
  },
  {
    name: 'route_plan',
    icon: routeIcon,
  },
  {
    name: 'ai_guide',
    icon: aiIcon,
  },
  {
    name: 'go_promotion',
    icon: giftIcon,
  },
]

export function FavoriteFeature() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex justify-around rounded-2xl bg-gray-100 px-3 py-4">
      {features.map(({ name, icon }) => (
        <div key={name} className="flex flex-1 flex-col items-center">
          <Image className="size-10" src={icon} alt={t(`features/${name}`)} />
          <span className="text-caption-bold mt-2 text-center text-gray-900">{t(`features/${name}`)}</span>
        </div>
      ))}
    </div>
  )
}
