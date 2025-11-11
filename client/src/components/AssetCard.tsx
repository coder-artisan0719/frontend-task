import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { Asset } from '@/types/asset';

export default function AssetCard({
  asset,
  commentCount = 0,
}: {
  asset: Asset;
  commentCount?: number;
}) {
  const navigate = useNavigate();
  const statusColors: Record<string, string> = {
    APPROVED: 'bg-[#C2FF7C] text-black',
    REJECTED: 'bg-[#FF7C7C] text-white',
    PENDING_BRAND_REVIEW: 'bg-[#FFD97C] text-black',
    PENDING_ADMIN_REVIEW: 'bg-[#FFD97C] text-black',
    AWAITING_ASSET: 'bg-[#C7C7C7] text-black',
  };

  return (
    <Card
      onClick={() => navigate(`/assets/${asset.id}`)}
      className="overflow-hidden rounded-xl border py-0 border-neutral-800 bg-black text-white hover:ring-2 hover:ring-neutral-700 transition-all cursor-pointer"
    >
      <div className="relative aspect-9/16 overflow-hidden">
        <img src={asset.thumbnailUrl} alt={asset.caption} className="object-cover w-full h-full" />
        {/* Status badge */}
        <div
          className={cn(
            'absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide shadow-md',
            statusColors[asset.status] ?? 'bg-neutral-600 text-white'
          )}
        >
          {asset.status.replace(/_/g, ' ')}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3">
          <Avatar className="w-8 h-8 ring-1 ring-white/20">
            <AvatarImage src={asset.creator.profilePictureUrl} />
            <AvatarFallback>{asset.creator.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">{asset.creator.name}</span>
            <span className="text-xs text-neutral-300">{asset.deliverable.title}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-t border-neutral-800 text-sm">
        <div className="flex items-center gap-2 opacity-70">
          <MessageSquare size={16} />
          <span>{commentCount} comments</span>
        </div>
      </div>
    </Card>
  );
}
