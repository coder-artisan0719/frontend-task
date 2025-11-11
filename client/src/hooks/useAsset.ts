import { useQuery } from '@tanstack/react-query';
import { getAsset } from '@/lib/api';

export function useAsset(assetId?: number) {
  return useQuery({
    queryKey: ['asset', assetId],
    enabled: !!assetId,
    queryFn: () => getAsset(assetId!),
  });
}
