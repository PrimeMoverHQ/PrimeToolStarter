import type { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon?: ReactNode
}

export function StatCard({ label, value, change, trend, icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">{label}</p>
            <p className="text-2xl font-semibold text-foreground">{value}</p>
          </div>
          {icon && (
            <div className="rounded-md bg-muted p-2 text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
        {change && (
          <div className="mt-3 flex items-center gap-1 text-xs">
            {trend === 'up' && (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            )}
            {trend === 'down' && (
              <TrendingDown className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
            )}
            {trend === 'neutral' && (
              <Minus className="h-3.5 w-3.5 text-muted-foreground" />
            )}
            <span
              className={
                trend === 'up'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : trend === 'down'
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-muted-foreground'
              }
            >
              {change}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
