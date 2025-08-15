import { useTranslations } from 'next-intl'
import { Link } from 'next-view-transitions'
import { Icons } from '@/assets/icons'

const features = [
  {
    name: 'travel_time_fare',
    icon: <Icons.Marker className="size-10" />,
    link: '/route-map',
  },
  {
    name: 'route_plan',
    icon: <Icons.RoutPlanning_Gradient className="size-10" />,
    link: '/route-map/route-planning',
  },
  {
    name: 'ai_guide',
    icon: <Icons.AiFeature className="size-10" />,
    link: '/ai-guide',
  },
  {
    name: 'go_promotion',
    icon: <Icons.Gift className="size-10" />,
    link: '',
  },
]

export function FavoriteFeature() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex justify-around rounded-2xl bg-gray-100 px-3 py-4">
      {features.map(({ name, icon, link }) => (
        <Link key={name} href={link} className="flex flex-1 flex-col items-center">
          {icon}
          <span className="text-caption-bold mt-2 text-center text-gray-900">{t(`features/${name}`)}</span>
        </Link>
      ))}
    </div>
  )
}
