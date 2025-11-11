import type { Asset } from '@/types/asset';
import { useQuery } from '@tanstack/react-query';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export const useAssets = () => {
  return useQuery<Asset[]>({
    queryKey: ['assets'],
    queryFn: async () => {
      const res = await fetch(`${API_BASE}/api/assets`);
      if (!res.ok) throw new Error('Failed to fetch assets');
      return res.json();
    },
  });
};
