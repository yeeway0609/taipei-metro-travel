import { NavHeader } from '@/components/NavHeader'
import { useTranslations } from 'next-intl'

export default function RoutePlanningPage() {
  const tCommon = useTranslations('Common')
  const tRouteMap = useTranslations('RouteMapPage')

  return (
    <div className="pb-navbar min-h-dvh">
      <NavHeader title={tCommon('page/route_planning')} />
    </div>
  )
}
