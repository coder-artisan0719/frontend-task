import { Badge } from '@/components/ui/badge';
import type { Asset } from '@/types/asset';
import { cn } from '@/lib/utils';

const status_styles: Record<Asset['status'], string> = {
  APPROVED: 'bg-lime-400 text-black',
  REJECTED: 'bg-rose-500 text-white',
  PENDING_BRAND_REVIEW: 'bg-amber-300 text-black',
  PENDING_ADMIN_REVIEW: 'bg-amber-300 text-black',
  AWAITING_ASSET: 'bg-neutral-400 text-black',
};

export default function StatusBadge({ status }: { status: Asset['status'] }) {
  return (
    <Badge className={cn('rounded-full font-semibold', status_styles[status])}>
      {status.replace(/_/g, ' ')}
    </Badge>
  );
}
