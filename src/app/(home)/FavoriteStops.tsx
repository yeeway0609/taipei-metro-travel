import { useTranslations } from 'next-intl'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function FavoriteStops() {
  const t = useTranslations('HomePage')

  return (
    <Tabs defaultValue="nearby">
      <TabsList>
        <TabsTrigger value="nearby">{t('stops/nearby_label')}</TabsTrigger>
        <TabsTrigger value="favorite">{t('stops/favorite_label')}</TabsTrigger>
      </TabsList>

      <TabsContent value="nearby">
        {/* TODO: 串API data */}
        {t('stops/nearby_label')}
      </TabsContent>
      <TabsContent value="favorite" className="flex items-center justify-center text-gray-400">
        {t('stops/favorite_placeholder')}
      </TabsContent>
    </Tabs>
  )
}
