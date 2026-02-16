'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ConfirmDialog } from '@/components/shared/confirm-dialog'
import { SearchInput } from '@/components/shared/search-input'
import { Pagination } from '@/components/shared/pagination'
import { DataTable, type Column } from '@/components/shared/data-table'
import { Badge } from '@/components/ui/badge'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { useDebounce } from '@/hooks/use-debounce'
import { useLocalStorage } from '@/hooks/use-local-storage'
import {
  formatDate,
  formatRelativeDate,
  formatNumber,
  formatCurrency,
  formatPercent,
  formatFileSize,
} from '@/lib/format'
import { fireConfetti, fireConfettiCannon, fireStars } from '@/lib/confetti'
import { Copy, Check } from 'lucide-react'

export function AlertDialogDemo() {
  const [open, setOpen] = useState(false)
  const [destructiveOpen, setDestructiveOpen] = useState(false)

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Confirm Dialog
      </Button>
      <Button variant="destructive" onClick={() => setDestructiveOpen(true)}>
        Destructive Confirm
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm Action"
        description="Are you sure you want to proceed? This action can be undone."
        onConfirm={() => {
          toast.success('Action confirmed')
          setOpen(false)
        }}
      />
      <ConfirmDialog
        open={destructiveOpen}
        onOpenChange={setDestructiveOpen}
        title="Delete Item"
        description="This action cannot be undone. This will permanently delete the item."
        destructive
        onConfirm={() => {
          toast.success('Item deleted')
          setDestructiveOpen(false)
        }}
      />
    </div>
  )
}

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        onClick={() => toast.success('Operation completed successfully')}
      >
        Success Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error('Something went wrong')}
      >
        Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info('Here is some information')}
      >
        Info Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning('Please be careful')}
      >
        Warning Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event created', {
            description: 'Monday, January 3rd at 6:00pm',
            action: {
              label: 'Undo',
              onClick: () => toast.info('Undo clicked'),
            },
          })
        }
      >
        Action Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          const id = toast.loading('Saving changes...')
          setTimeout(() => toast.success('Changes saved!', { id }), 2000)
        }}
      >
        Loading Toast
      </Button>
    </div>
  )
}

export function SearchInputDemo() {
  const [search, setSearch] = useState('')

  return (
    <div className="max-w-sm space-y-2">
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search items..."
      />
      <p className="text-xs text-muted-foreground">
        Current value: &ldquo;{search}&rdquo;
      </p>
    </div>
  )
}

export function PaginationDemo() {
  const [page, setPage] = useState(1)

  return (
    <div className="space-y-2">
      <Pagination
        currentPage={page}
        totalPages={12}
        totalCount={116}
        onPageChange={setPage}
      />
    </div>
  )
}

interface SampleRow {
  [key: string]: unknown
  name: string
  email: string
  status: string
  role: string
}

const sampleData: SampleRow[] = [
  { name: 'Alice Johnson', email: 'alice@example.com', status: 'Active', role: 'Admin' },
  { name: 'Bob Smith', email: 'bob@example.com', status: 'Active', role: 'Editor' },
  { name: 'Carol White', email: 'carol@example.com', status: 'Inactive', role: 'Viewer' },
  { name: 'David Brown', email: 'david@example.com', status: 'Active', role: 'Editor' },
]

const columns: Column<SampleRow>[] = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  {
    key: 'status',
    header: 'Status',
    render: (row) => (
      <Badge variant={row.status === 'Active' ? 'default' : 'secondary'}>
        {row.status}
      </Badge>
    ),
  },
  { key: 'role', header: 'Role' },
]

export function DataTableDemo() {
  const [sortCol, setSortCol] = useState<string | undefined>()
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (col: string) => {
    if (sortCol === col) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortCol(col)
      setSortDir('asc')
    }
  }

  const sorted = [...sampleData].sort((a, b) => {
    if (!sortCol) return 0
    const aVal = String(a[sortCol] ?? '')
    const bVal = String(b[sortCol] ?? '')
    return sortDir === 'asc'
      ? aVal.localeCompare(bVal)
      : bVal.localeCompare(aVal)
  })

  return (
    <div className="space-y-4">
      <DataTable
        columns={columns}
        data={sorted}
        sortColumn={sortCol}
        sortDirection={sortDir}
        onSort={handleSort}
        onRowClick={(row) => toast.info(`Clicked: ${row.name}`)}
      />
    </div>
  )
}

export function DataTableLoadingDemo() {
  return (
    <DataTable
      columns={columns}
      data={[]}
      loading
    />
  )
}

export function DataTableEmptyDemo() {
  return (
    <DataTable
      columns={columns}
      data={[]}
      emptyTitle="No users found"
      emptyDescription="Try adjusting your search or filters."
    />
  )
}

export function ConfettiDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={fireConfetti}>
        Confetti Burst
      </Button>
      <Button variant="outline" onClick={fireConfettiCannon}>
        Side Cannons
      </Button>
      <Button variant="outline" onClick={fireStars}>
        Stars
      </Button>
    </div>
  )
}

export function CopyToClipboardDemo() {
  const { copy, copied } = useCopyToClipboard()
  const sampleText = 'pnpm add canvas-confetti'

  return (
    <div className="flex items-center gap-2 max-w-sm">
      <code className="flex-1 rounded-md bg-muted px-3 py-2 text-xs font-mono text-foreground">
        {sampleText}
      </code>
      <Button
        variant="outline"
        size="sm"
        onClick={() => copy(sampleText)}
        className="shrink-0"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </Button>
    </div>
  )
}

export function DebounceDemo() {
  const [input, setInput] = useState('')
  const debounced = useDebounce(input, 500)

  return (
    <div className="max-w-sm space-y-3">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something (500ms debounce)..."
      />
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-md bg-muted p-2.5">
          <p className="text-muted-foreground mb-0.5">Raw value</p>
          <p className="font-mono text-foreground truncate">{input || '—'}</p>
        </div>
        <div className="rounded-md bg-muted p-2.5">
          <p className="text-muted-foreground mb-0.5">Debounced value</p>
          <p className="font-mono text-foreground truncate">{debounced || '—'}</p>
        </div>
      </div>
    </div>
  )
}

export function LocalStorageDemo() {
  const [count, setCount] = useLocalStorage('demo-counter', 0)

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCount((c) => c - 1)}
      >
        -
      </Button>
      <span className="min-w-[3ch] text-center text-sm font-medium tabular-nums">
        {count}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </Button>
      <span className="text-xs text-muted-foreground ml-2">
        Persisted in localStorage — refresh to verify
      </span>
    </div>
  )
}

export function FormattersDemo() {
  const now = new Date()
  const pastDate = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000)

  const examples = [
    { label: 'formatDate(now)', value: formatDate(now) },
    { label: 'formatDate(now, "PPpp")', value: formatDate(now, 'PPpp') },
    { label: 'formatRelativeDate(3 days ago)', value: formatRelativeDate(pastDate) },
    { label: 'formatNumber(1234567)', value: formatNumber(1234567) },
    { label: 'formatNumber(3.14159, 2)', value: formatNumber(3.14159, 2) },
    { label: 'formatCurrency(9999.99)', value: formatCurrency(9999.99) },
    { label: 'formatCurrency(1250, "EUR")', value: formatCurrency(1250, 'EUR') },
    { label: 'formatPercent(85.5)', value: formatPercent(85.5) },
    { label: 'formatFileSize(0)', value: formatFileSize(0) },
    { label: 'formatFileSize(1024)', value: formatFileSize(1024) },
    { label: 'formatFileSize(5242880)', value: formatFileSize(5242880) },
    { label: 'formatFileSize(1073741824)', value: formatFileSize(1073741824) },
  ]

  return (
    <div className="rounded-md border overflow-hidden">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="text-left font-medium text-muted-foreground px-3 py-2">Call</th>
            <th className="text-left font-medium text-muted-foreground px-3 py-2">Output</th>
          </tr>
        </thead>
        <tbody>
          {examples.map((ex, i) => (
            <tr key={i} className="border-b last:border-0">
              <td className="px-3 py-2 font-mono text-muted-foreground">{ex.label}</td>
              <td className="px-3 py-2 font-mono text-foreground font-medium">{ex.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ValidatorsDemo() {
  const [emailInput, setEmailInput] = useState('')
  const [urlInput, setUrlInput] = useState('')
  const [emailError, setEmailError] = useState<string | null>(null)
  const [urlError, setUrlError] = useState<string | null>(null)
  const [emailValid, setEmailValid] = useState(false)
  const [urlValid, setUrlValid] = useState(false)

  const validateEmail = (val: string) => {
    setEmailInput(val)
    if (!val) { setEmailError(null); setEmailValid(false); return }
    // Dynamic import to avoid SSR issues with zod
    import('@/lib/validators').then(({ email }) => {
      const result = email.safeParse(val)
      if (result.success) {
        setEmailError(null)
        setEmailValid(true)
      } else {
        setEmailError(result.error.issues[0]?.message ?? 'Invalid')
        setEmailValid(false)
      }
    })
  }

  const validateUrl = (val: string) => {
    setUrlInput(val)
    if (!val) { setUrlError(null); setUrlValid(false); return }
    import('@/lib/validators').then(({ url }) => {
      const result = url.safeParse(val)
      if (result.success) {
        setUrlError(null)
        setUrlValid(true)
      } else {
        setUrlError(result.error.issues[0]?.message ?? 'Invalid')
        setUrlValid(false)
      }
    })
  }

  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-1.5">
        <Input
          value={emailInput}
          onChange={(e) => validateEmail(e.target.value)}
          placeholder="Test email validation..."
          className={emailError ? 'border-destructive' : emailValid ? 'border-emerald-500' : ''}
        />
        {emailError && <p className="text-xs text-destructive">{emailError}</p>}
        {emailValid && <p className="text-xs text-emerald-600 dark:text-emerald-400">Valid email</p>}
      </div>
      <div className="space-y-1.5">
        <Input
          value={urlInput}
          onChange={(e) => validateUrl(e.target.value)}
          placeholder="Test URL validation..."
          className={urlError ? 'border-destructive' : urlValid ? 'border-emerald-500' : ''}
        />
        {urlError && <p className="text-xs text-destructive">{urlError}</p>}
        {urlValid && <p className="text-xs text-emerald-600 dark:text-emerald-400">Valid URL</p>}
      </div>
    </div>
  )
}
