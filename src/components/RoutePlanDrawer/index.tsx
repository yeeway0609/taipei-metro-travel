import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer'
import { RoutePlanItem } from './RoutePlanItem'

interface RoutePlanDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RoutePlanDrawer({ open, onOpenChange }: RoutePlanDrawerProps) {
  const locale = useLocale()
  const t = useTranslations('RoutePlanDrawer')

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="px-7 pb-8">
        <DrawerTitle className="mt-4 text-3xl">20 {t('minute')}</DrawerTitle>
        <p className="text-title mt-1 mb-5">{t('pass_stops', { count: 6 })}</p>

        <RoutePlanItem
          lineID="R"
          stationID="R02"
          lineName={locale === 'zh-TW' ? '淡水信義線' : 'Tamsui-Xinyi Line'}
          stationName={locale === 'zh-TW' ? '象山' : 'Xiangshan'}
          entranceNumber={3}
          departureTimeLeft={5}
          arrivalTime="15:35"
          showLine={true}
        />
        <RoutePlanItem
          lineID="R"
          stationID="R08"
          lineName={locale === 'zh-TW' ? '淡水信義線' : 'Tamsui-Xinyi Line'}
          stationName={locale === 'zh-TW' ? '中正紀念堂' : 'CKS Memorial Hall'}
          entranceNumber={5}
          departureTimeLeft={20}
          arrivalTime="15:47"
        />
      </DrawerContent>
    </Drawer>
  )
}
