'use client'
import { useState } from 'react'
import { clsx } from 'clsx'
import { Drawer } from 'vaul'

const snapPoints = ['355px', 0.9]

export function ResponsiveDrawer({ children }: { children: React.ReactNode }) {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0])

  return (
    <Drawer.Root
      open
      defaultOpen
      repositionInputs={false}
      snapPoints={snapPoints}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
    >
      <Drawer.Portal>
        <Drawer.Content className="border-b-none fixed right-0 bottom-0 left-0 flex h-full max-h-[95%] flex-col rounded-t-xl border border-gray-200 bg-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.25)]">
          <div className="mx-auto my-2 h-1 w-14 rounded-2xl bg-[#D9D9D9]" aria-hidden />

          <div
            className={clsx('mx-auto flex w-full max-w-md flex-col p-5 pt-4', {
              'overflow-y-auto': snap === snapPoints[1],
              'overflow-hidden': snap !== snapPoints[1],
            })}
          >
            <Drawer.Title className="sr-only"></Drawer.Title>
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
