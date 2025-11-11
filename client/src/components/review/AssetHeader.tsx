import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StatusModal } from '@/components/review/StatusModal';
import { useUpdateStatus } from '@/hooks/useUpdateStatus';
import StatusBadge from './ StatusBadge';

export default function AssetHeader({ asset }: { asset: any }) {
  const [open, setOpen] = useState(false);
  const updateStatus = useUpdateStatus(asset.id);

  return (
    <div className="flex justify-end gap-4 items-center mb-4">
      <div>
        <StatusBadge status={asset.status} />
      </div>

      <Button
        onClick={() => setOpen(true)}
        className="bg-purple-600 cursor-pointer hover:bg-purple-700"
      >
        Edit Status
      </Button>

      <StatusModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={(status) =>
          updateStatus.mutate(
            status as
              | 'AWAITING_ASSET'
              | 'PENDING_ADMIN_REVIEW'
              | 'PENDING_BRAND_REVIEW'
              | 'APPROVED'
              | 'REJECTED',
            { onSuccess: () => setOpen(false) }
          )
        }
        isLoading={updateStatus.isPending}
        current={asset.status}
      />
    </div>
  );
}
