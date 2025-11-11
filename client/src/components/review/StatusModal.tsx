import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useState } from 'react';

const STATUSES = [
  'AWAITING_ASSET',
  'PENDING_ADMIN_REVIEW',
  'PENDING_BRAND_REVIEW',
  'APPROVED',
  'REJECTED',
];

export function StatusModal({
  open,
  onClose,
  onSubmit,
  isLoading,
  current,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (status: string) => void;
  isLoading?: boolean;
  current?: string;
}) {
  const [status, setStatus] = useState(current ?? '');

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Asset Status</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status..." />
              </SelectTrigger>
              <SelectContent>
                {STATUSES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s.replaceAll('_', ' ')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            variant={'secondary'}
            disabled={!status || isLoading}
            onClick={() => onSubmit(status)}
            className="w-full"
          >
            {isLoading ? 'Updating...' : 'Update'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
