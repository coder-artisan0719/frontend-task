import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getComments, postComment } from '@/lib/api';

export function useComments(assetId?: number) {
  const qc = useQueryClient();

  const list = useQuery({
    queryKey: ['comments', assetId],
    enabled: !!assetId,
    queryFn: () => getComments(assetId!),
  });

  const add = useMutation({
    mutationFn: (text: string) => postComment(assetId!, text),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['comments', assetId] }),
  });

  return { list, add };
}
