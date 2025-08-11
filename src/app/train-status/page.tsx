import { useTranslations } from 'next-intl'
import { NavHeader } from '@/components/NavHeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DynamicInfo } from './DynamicInfo'

export default function TrainStatusPage() {
  const tCommon = useTranslations('Common')
  const tTrainStatus = useTranslations('TrainStatusPage')

  return (
    <div className="px-5 pb-20">
      <NavHeader title={tCommon('page/train_status')} />

      <Tabs defaultValue="dynamic-info">
        <TabsList className="w-full">
          <TabsTrigger value="dynamic-info" size="lg">
            {tTrainStatus('dynamic_info')}
          </TabsTrigger>
          <TabsTrigger value="favorite" size="lg">
            {tTrainStatus('favorite_stops')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dynamic-info">
          <DynamicInfo />
        </TabsContent>
        <TabsContent value="favorite">
          <p className="mt-32 text-center text-gray-400">{tTrainStatus('favorite_stops_placeholder')}</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
