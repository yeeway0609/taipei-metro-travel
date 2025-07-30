import { Icons } from '@/assets/icons'

const items = [
  { name: '捷運路線圖', icon: Icons.RoadMap },
  { name: '列車動態', icon: Icons.Train },
  { name: '首頁', icon: Icons.Home },
  { name: 'AI 在地嚮導', icon: Icons.AiGuide },
  { name: '個人資訊', icon: Icons.Profile },
]

export function NavBar() {
  return (
    <div className="w-app fixed bottom-0 px-2.5">
      <nav className="bg-gray-bg flex w-full items-center justify-between rounded-t-3xl px-2 py-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <button type="button" className="flex flex-1 flex-col items-center text-gray-600" key={item.name}>
              <Icon className="size-[30px]" />
              <span className="mt-1 text-xs">{item.name}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
