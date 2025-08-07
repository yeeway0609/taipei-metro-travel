import { useTranslations } from 'next-intl'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function FavoriteStops() {
  const t = useTranslations('HomePage')

  return (
    <Tabs defaultValue="nearby">
      <TabsList className="pl-1">
        <TabsTrigger className="w-[60px]" value="nearby">
          {t('stops/nearby_label')}
        </TabsTrigger>
        <TabsTrigger className="w-[60px]" value="favorite">
          {t('stops/favorite_label')}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="nearby" className="min-h-40 bg-gray-100">
        {/* TODO: 串API data */}
        {t('stops/nearby_label')}
      </TabsContent>
      <TabsContent value="favorite" className="flex min-h-40 items-center justify-center bg-gray-100 text-gray-400">
        {t('stops/favorite_placeholder')}
      </TabsContent>
    </Tabs>
  )
}
