import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchStatus } from '@/lib/api';
import type { Asset } from '@/types/asset';

export function useUpdateStatus(assetId: number) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (status: Asset['status']) => patchStatus(assetId, status),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['asset', assetId] });
      qc.invalidateQueries({ queryKey: ['assets'] });
    },
  });
}
