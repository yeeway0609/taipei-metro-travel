import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Drawer } from 'vaul'

import { RoutePlanItem } from './RoutePlanItem'

interface RoutePlanDrawerProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
  hasOverlay?: boolean
}

export function RoutePlanDrawer({ open, onOpenChange, hasOverlay = true }: RoutePlanDrawerProps) {
  const locale = useLocale()
  const t = useTranslations('RoutePlanDrawer')

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} modal={hasOverlay} handleOnly={!hasOverlay}>
      <Drawer.Portal>
        {hasOverlay && <Drawer.Overlay className="fixed inset-0 bg-black/40" />}

        <Drawer.Content className="border-b-none fixed right-0 bottom-0 left-0 z-40 flex h-2/3 min-h-[240px] flex-col rounded-t-xl border border-gray-200 bg-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.25)]">
          <Drawer.Handle className="my-2" style={{ width: '80px' }} />

          <div className="overflow-y-auto px-7 pb-8">
            <Drawer.Title className="mt-4 text-3xl">20 {t('minute')}</Drawer.Title>
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
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
