import type * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn('flex flex-col gap-1.5', className)} {...props} />
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn('inline-flex w-fit items-center justify-center gap-2 rounded-lg pl-1 text-gray-900', className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <div className="relative">
      <TabsPrimitive.Trigger
        data-slot="tabs-trigger"
        className={cn(
          'data-[state=active]:text-body-bold text-body peer inline-flex h-[calc(100%-1px)] w-full flex-1 items-center justify-center whitespace-nowrap',
          className
        )}
        {...props}
      />
      <div className="h-0.5 w-[60px] rounded-xl peer-data-[state=active]:bg-linear-(--gradient-metro)"></div>
    </div>
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('min-h-40 flex-1 bg-gray-100 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
