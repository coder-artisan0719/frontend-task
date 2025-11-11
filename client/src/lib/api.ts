import type { Asset, Comment } from '@/types/asset';

export const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export async function getAssets(): Promise<Asset[]> {
  const r = await fetch(`${API_BASE}/api/assets`);
  if (!r.ok) throw new Error('Failed to fetch assets');
  return r.json();
}

export async function getAsset(assetId: number): Promise<Asset | undefined> {
  //Note: We don't have endpoint for getting single asset so i have to get all and filter by id.
  const list = await getAssets();
  return list.find((a) => a.id === assetId);
}

export async function getComments(assetId: number): Promise<Comment[]> {
  const r = await fetch(`${API_BASE}/api/assets/${assetId}/comments`);
  if (!r.ok) throw new Error('Failed to fetch comments');
  return r.json();
}

export async function postComment(assetId: number, text: string): Promise<void> {
  const r = await fetch(`${API_BASE}/api/assets/${assetId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ comment: text }),
  });
  if (!r.ok) throw new Error('Failed to post comment');
}

export async function patchStatus(assetId: number, status: Asset['status']): Promise<Asset> {
  const r = await fetch(`${API_BASE}/api/assets/${assetId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}
