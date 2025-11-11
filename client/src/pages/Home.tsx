import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useAssets } from '@/hooks/useAssets';
import AssetCard from '@/components/AssetCard';

const STATUSES = [
  { key: 'ALL', label: 'All' },
  { key: 'AWAITING_ASSET', label: 'Awaiting asset' },
  { key: 'PENDING_ADMIN_REVIEW', label: 'Needs admin review' },
  { key: 'PENDING_BRAND_REVIEW', label: 'In brand review' },
  { key: 'REJECTED', label: 'Rejected' },
  { key: 'APPROVED', label: 'Approved' },
];

export default function Home() {
  const { data: assets = [], isLoading } = useAssets();

  const grouped = (status: string) =>
    status === 'ALL' ? assets : assets.filter((a) => a.status === status);

  if (isLoading)
    return (
      <div className="p-4 h-screen text-center flex items-center justify-center text-sm opacity-70">
        Loading...
      </div>
    );

  return (
    <div className="container px-4 mx-auto py-6 space-y-6">
      <h1 className="text-2xl font-semibold">Kyra Challenge</h1>

      <Tabs defaultValue="ALL" className="w-full">
        <TabsList className="flex flex-wrap gap-2 h-fit">
          {STATUSES.map((status) => (
            <TabsTrigger key={status.key} value={status.key} className="capitalize">
              {status.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {STATUSES.map((status) => (
          <TabsContent key={status.key} value={status.key}>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-8 lg:mt-4">
              {grouped(status.key).map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
            {!grouped(status.key).length && (
              <p className="flex items-center justify-center h-[700px] text-sm opacity-70">
                No assets found.
              </p>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
