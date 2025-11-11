import type { ReactElement } from 'react';
import Home from '@/pages/Home';
import AssetReviewPage from './pages/AssetReview';

export type AppRoute = {
  path: string;
  element: ReactElement;
  label: string;
};

export const routes: AppRoute[] = [
  { path: '/', element: <Home />, label: 'Home' },
  { path: '/assets/:assetId', element: <AssetReviewPage />, label: 'Asset Review' },
];
