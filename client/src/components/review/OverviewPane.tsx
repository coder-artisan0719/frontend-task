import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { Asset } from '@/types/asset';

export default function OverviewPane({ asset }: { asset: Asset }) {
  return (
    <div className="text-sm border-b border-gray-400">
      {/* --- OVERVIEW SECTION --- */}
      <section className="flex flex-col gap-3 p-6">
        <h3 className="text-base font-semibold">Overview</h3>

        {/* Creator Info */}
        <div className="flex items-center gap-3">
          <Avatar className="w-9 h-9">
            <AvatarImage src={asset.creator.profilePictureUrl} />
            <AvatarFallback>{asset.creator.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{asset.creator.name}</p>
            <p className="text-xs text-muted-foreground font-semibold">@{asset.creator.handle}</p>
          </div>
        </div>

        {/* Brief Name */}
        <div className="flex flex-col">
          <span className="text-gray-400 font-semibold text-lg">Brief Name</span>
          <span className="font-medium text-white">{asset.deliverable.brief.name}</span>
        </div>

        {/* Fee + Deadline Row */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold text-lg">Fee</span>
            <span className="font-medium text-white">{asset.deliverable.fees ?? '—'}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-gray-400 font-semibold text-lg">Deadline</span>
            <span className="font-medium text-white">{asset.deliverable.deadline ?? '—'}</span>
          </div>
        </div>

        {/* Deliverable Title */}
        <div className="flex flex-col">
          <span className="text-gray-400 font-semibold text-lg">Deliverable title</span>
          <span className="font-medium text-white">{asset.deliverable.title}</span>
        </div>
      </section>
    </div>
  );
}
