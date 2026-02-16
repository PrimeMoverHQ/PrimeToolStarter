import { AppHeader } from '@/components/shared/app-header'
import { AppFooter } from '@/components/shared/app-footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { StatCard } from '@/components/shared/stat-card'
import { EmptyState } from '@/components/shared/empty-state'
import { LoadingOverlay } from '@/components/shared/loading-overlay'
import {
  AlertDialogDemo,
  ToastDemo,
  SearchInputDemo,
  PaginationDemo,
  DataTableDemo,
  DataTableLoadingDemo,
  DataTableEmptyDemo,
  ConfettiDemo,
  CopyToClipboardDemo,
  DebounceDemo,
  LocalStorageDemo,
  FormattersDemo,
  ValidatorsDemo,
} from './_components/interactive-demos'
import {
  Info,
  Users,
  TrendingUp,
  ShoppingCart,
  DollarSign,
  Inbox,
  FileText,
  Plus,
} from 'lucide-react'

export const metadata = {
  title: 'Design System',
}

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3">
            <Info className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              This page showcases the design system included in your starter
              template. Remove this page after styling your components.
            </p>
          </div>

          {/* Typography */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Typography
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1 font-mono">
                  h1 &middot; text-3xl font-bold
                </p>
                <h1 className="text-3xl font-bold text-foreground">
                  Heading One
                </h1>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 font-mono">
                  h2 &middot; text-2xl font-semibold
                </p>
                <h2 className="text-2xl font-semibold text-foreground">
                  Heading Two
                </h2>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 font-mono">
                  h3 &middot; text-xl font-medium
                </p>
                <h3 className="text-xl font-medium text-foreground">
                  Heading Three
                </h3>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 font-mono">
                  h4 &middot; text-lg font-medium
                </p>
                <h4 className="text-lg font-medium text-foreground">
                  Heading Four
                </h4>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 font-mono">
                  body &middot; text-sm
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  Body text uses Fira Sans at 14px. This is the standard size
                  for paragraph content, descriptions, and general reading. It
                  provides a comfortable reading experience across devices.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 font-mono">
                  muted &middot; text-sm text-muted-foreground
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Muted text is used for secondary information, descriptions,
                  and helper text. It has lower visual prominence than body text.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 font-mono">
                  code &middot; font-mono text-xs
                </p>
                <p className="text-sm text-foreground">
                  Inline code uses{' '}
                  <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-md">
                    Fira Code
                  </code>{' '}
                  for technical content like{' '}
                  <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-md">
                    variables
                  </code>{' '}
                  and{' '}
                  <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded-md">
                    function()
                  </code>{' '}
                  calls.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 font-mono">
                  caption &middot; text-xs
                </p>
                <p className="text-xs text-muted-foreground">
                  Caption text is the smallest size, used for labels, timestamps,
                  and metadata.
                </p>
              </div>
            </div>
          </section>

          {/* Color Palette */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Colors
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="space-y-1.5">
                <div className="h-16 rounded-md bg-primary" />
                <p className="text-xs font-mono text-muted-foreground">
                  primary
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 rounded-md bg-secondary" />
                <p className="text-xs font-mono text-muted-foreground">
                  secondary
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 rounded-md bg-accent" />
                <p className="text-xs font-mono text-muted-foreground">
                  accent
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 rounded-md bg-muted" />
                <p className="text-xs font-mono text-muted-foreground">
                  muted
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 rounded-md bg-destructive" />
                <p className="text-xs font-mono text-muted-foreground">
                  destructive
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 rounded-md bg-card border border-border" />
                <p className="text-xs font-mono text-muted-foreground">card</p>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 rounded-md bg-background border border-border" />
                <p className="text-xs font-mono text-muted-foreground">
                  background
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="h-16 rounded-md bg-foreground" />
                <p className="text-xs font-mono text-muted-foreground">
                  foreground
                </p>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Buttons
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2 font-mono">
                  variants
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-2 font-mono">
                  sizes
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-2 font-mono">
                  states
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button>Enabled</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Badges
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </section>

          {/* Form Elements */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Form Elements
              </h2>
            </div>

            <div className="space-y-6 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="text-input">Text Input</Label>
                <Input id="text-input" placeholder="Enter some text..." />
                <p className="text-xs text-muted-foreground">
                  Helper text goes here.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="disabled-input">Disabled Input</Label>
                <Input id="disabled-input" placeholder="Cannot edit this" disabled />
              </div>

              <div className="space-y-2">
                <Label htmlFor="textarea">Textarea</Label>
                <Textarea id="textarea" placeholder="Write something longer..." />
              </div>

              <div className="space-y-2">
                <Label>Select</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one">Option One</SelectItem>
                    <SelectItem value="two">Option Two</SelectItem>
                    <SelectItem value="three">Option Three</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file-input">File Input</Label>
                <Input id="file-input" type="file" />
              </div>

              <Separator />

              <div className="space-y-4">
                <p className="text-xs text-muted-foreground font-mono">
                  checkbox &amp; switch
                </p>
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    Accept terms and conditions
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="checked" defaultChecked />
                  <Label htmlFor="checked" className="text-sm font-normal">
                    Already accepted
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications" className="text-sm font-normal">
                    Enable notifications
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="enabled" defaultChecked />
                  <Label htmlFor="enabled" className="text-sm font-normal">
                    Feature enabled
                  </Label>
                </div>
              </div>
            </div>
          </section>

          {/* Cards */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Cards
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Standard card component with header and content areas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="rounded-lg bg-muted p-4 space-y-2">
                    <h3 className="text-sm font-medium text-foreground">
                      Content-Only Card
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      A card without the header section, useful for simpler content blocks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tabs */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Tabs
              </h2>
            </div>

            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Overview</TabsTrigger>
                <TabsTrigger value="tab2">Settings</TabsTrigger>
                <TabsTrigger value="tab3">Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <Card>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Overview tab content. Switch between tabs to see different content.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <Card>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Settings tab content with configuration options.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <Card>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Activity tab content showing recent actions.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Table */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Table
              </h2>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Alice Johnson</TableCell>
                    <TableCell><Badge>Active</Badge></TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bob Smith</TableCell>
                    <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
                    <TableCell>Editor</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Carol White</TableCell>
                    <TableCell><Badge>Active</Badge></TableCell>
                    <TableCell>Viewer</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Progress & Skeleton */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Progress &amp; Skeleton
              </h2>
            </div>

            <div className="space-y-6 max-w-md">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-mono">progress</p>
                <Progress value={25} />
                <Progress value={60} />
                <Progress value={100} />
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-mono">skeleton</p>
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Separator */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Separator
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Content above separator</p>
              <Separator />
              <p className="text-sm text-muted-foreground">Content below separator</p>
            </div>
          </section>

          {/* Toasts */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Toasts
              </h2>
            </div>

            <ToastDemo />
          </section>

          {/* Confirm Dialog */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Confirm Dialog
              </h2>
            </div>

            <AlertDialogDemo />
          </section>

          {/* Search Input */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Search Input
              </h2>
            </div>

            <SearchInputDemo />
          </section>

          {/* Pagination */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Pagination
              </h2>
            </div>

            <PaginationDemo />
          </section>

          {/* Stat Cards */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Stat Cards
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard
                label="Total Revenue"
                value="$45,231"
                change="+20.1% from last month"
                trend="up"
                icon={<DollarSign className="h-4 w-4" />}
              />
              <StatCard
                label="Subscribers"
                value="2,350"
                change="+180 this week"
                trend="up"
                icon={<Users className="h-4 w-4" />}
              />
              <StatCard
                label="Sales"
                value="12,234"
                change="-4.5% from last month"
                trend="down"
                icon={<ShoppingCart className="h-4 w-4" />}
              />
              <StatCard
                label="Growth"
                value="8.2%"
                change="No change"
                trend="neutral"
                icon={<TrendingUp className="h-4 w-4" />}
              />
            </div>
          </section>

          {/* Empty State */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Empty State
              </h2>
            </div>

            <div className="rounded-md border">
              <EmptyState
                icon={<Inbox className="h-5 w-5" />}
                title="No messages yet"
                description="When you receive messages, they will appear here."
                action={<Button size="sm">Compose</Button>}
              />
            </div>

            <div className="rounded-md border">
              <EmptyState
                icon={<FileText className="h-5 w-5" />}
                title="No documents"
                description="Upload a document to get started."
                action={
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1.5" />
                    Upload
                  </Button>
                }
              />
            </div>
          </section>

          {/* Data Table */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Data Table
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-muted-foreground font-mono">sortable with row click</p>
              <DataTableDemo />
            </div>

            <div className="space-y-4">
              <p className="text-xs text-muted-foreground font-mono">loading state</p>
              <DataTableLoadingDemo />
            </div>

            <div className="space-y-4">
              <p className="text-xs text-muted-foreground font-mono">empty state</p>
              <DataTableEmptyDemo />
            </div>
          </section>

          {/* Loading Overlay */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Loading Overlay
              </h2>
            </div>

            <div className="relative h-40 rounded-md border">
              <div className="p-4 space-y-2">
                <p className="text-sm text-muted-foreground">Content behind the overlay</p>
                <p className="text-xs text-muted-foreground">This area is being loaded...</p>
              </div>
              <LoadingOverlay message="Loading data..." />
            </div>
          </section>

          {/* Border Radius */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Border Radius
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="space-y-1.5 text-center">
                <div className="h-16 w-16 bg-accent rounded-sm" />
                <p className="text-xs font-mono text-muted-foreground">sm</p>
              </div>
              <div className="space-y-1.5 text-center">
                <div className="h-16 w-16 bg-accent rounded-md" />
                <p className="text-xs font-mono text-muted-foreground">md</p>
              </div>
              <div className="space-y-1.5 text-center">
                <div className="h-16 w-16 bg-accent rounded-lg" />
                <p className="text-xs font-mono text-muted-foreground">lg</p>
              </div>
              <div className="space-y-1.5 text-center">
                <div className="h-16 w-16 bg-accent rounded-xl" />
                <p className="text-xs font-mono text-muted-foreground">xl</p>
              </div>
              <div className="space-y-1.5 text-center">
                <div className="h-16 w-16 bg-accent rounded-full" />
                <p className="text-xs font-mono text-muted-foreground">full</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Utilities & Libraries */}
          <section className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground border-b border-border pb-3">
                Utilities &amp; Libraries
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Pre-built utilities, hooks, and libraries included in the starter template.
              </p>
            </div>

            {/* Confetti */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Confetti</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <code className="font-mono bg-muted px-1 py-0.5 rounded">lib/confetti.ts</code> &mdash; canvas-confetti with theme colors
                </p>
              </div>
              <ConfettiDemo />
            </div>

            <Separator />

            {/* Format Utilities */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Format Utilities</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <code className="font-mono bg-muted px-1 py-0.5 rounded">lib/format.ts</code> &mdash; date-fns + Intl.NumberFormat
                </p>
              </div>
              <FormattersDemo />
            </div>

            <Separator />

            {/* Validators */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Validators</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <code className="font-mono bg-muted px-1 py-0.5 rounded">lib/validators.ts</code> &mdash; Zod v4 schemas for common fields
                </p>
              </div>
              <ValidatorsDemo />
              <div className="rounded-md border overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left font-medium text-muted-foreground px-3 py-2">Schema</th>
                      <th className="text-left font-medium text-muted-foreground px-3 py-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['requiredString', 'Non-empty string'],
                      ['email', 'Valid email address'],
                      ['url', 'Valid URL'],
                      ['phone', 'Phone number (7-20 digits, allows +, spaces, dashes)'],
                      ['positiveInt', 'Positive whole number'],
                      ['id', 'Non-empty string ID'],
                      ['dateString', 'YYYY-MM-DD format'],
                      ['optionalString', 'Optional string field'],
                    ].map(([name, desc]) => (
                      <tr key={name} className="border-b last:border-0">
                        <td className="px-3 py-2 font-mono text-foreground font-medium">{name}</td>
                        <td className="px-3 py-2 text-muted-foreground">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Separator />

            {/* useDebounce */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">useDebounce</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <code className="font-mono bg-muted px-1 py-0.5 rounded">hooks/use-debounce.ts</code> &mdash; delays value updates for search/filter inputs
                </p>
              </div>
              <DebounceDemo />
            </div>

            <Separator />

            {/* useLocalStorage */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">useLocalStorage</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <code className="font-mono bg-muted px-1 py-0.5 rounded">hooks/use-local-storage.ts</code> &mdash; SSR-safe persisted state
                </p>
              </div>
              <LocalStorageDemo />
            </div>

            <Separator />

            {/* useCopyToClipboard */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">useCopyToClipboard</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <code className="font-mono bg-muted px-1 py-0.5 rounded">hooks/use-copy-to-clipboard.ts</code> &mdash; clipboard API + toast feedback
                </p>
              </div>
              <CopyToClipboardDemo />
            </div>

            <Separator />

            {/* Included Libraries */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Included Libraries</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  All packages pre-installed and ready to use
                </p>
              </div>
              <div className="rounded-md border overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left font-medium text-muted-foreground px-3 py-2">Package</th>
                      <th className="text-left font-medium text-muted-foreground px-3 py-2">Purpose</th>
                      <th className="text-left font-medium text-muted-foreground px-3 py-2">Import</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['sonner', 'Toast notifications', "import { toast } from 'sonner'"],
                      ['zod', 'Schema validation', "import { z } from 'zod/v4'"],
                      ['date-fns', 'Date formatting & math', "import { format } from 'date-fns'"],
                      ['canvas-confetti', 'Celebration effects', "import { fireConfetti } from '@/lib/confetti'"],
                      ['lucide-react', 'Icon library (1000+)', "import { Icon } from 'lucide-react'"],
                      ['ai', 'Vercel AI SDK', "import { streamText } from 'ai'"],
                      ['@ai-sdk/openai', 'OpenAI provider', "import { openai } from '@ai-sdk/openai'"],
                      ['@ai-sdk/anthropic', 'Anthropic provider', "import { anthropic } from '@ai-sdk/anthropic'"],
                      ['radix-ui', 'Headless UI primitives', 'Via shadcn/ui components'],
                      ['tailwind-merge', 'Class merging', "import { cn } from '@/lib/utils'"],
                      ['class-variance-authority', 'Variant styling', "import { cva } from 'class-variance-authority'"],
                    ].map(([name, purpose, imp]) => (
                      <tr key={name} className="border-b last:border-0">
                        <td className="px-3 py-2 font-mono text-foreground font-medium">{name}</td>
                        <td className="px-3 py-2 text-muted-foreground">{purpose}</td>
                        <td className="px-3 py-2 font-mono text-muted-foreground">{imp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
