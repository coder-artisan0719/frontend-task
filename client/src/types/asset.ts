export type Creator = {
  id: number;
  name: string;
  handle: string;
  profilePictureUrl: string;
};

export type Deliverable = {
  id: number;
  title: string;
  deadline: string | null;
  fees: number | null;
  brief: { id: number; name: string };
};

export type Asset = {
  id: number;
  creator: Creator;
  assetUrl: string;
  thumbnailUrl: string;
  caption: string;
  soundUrl: string;
  status:
    | 'AWAITING_ASSET'
    | 'PENDING_ADMIN_REVIEW'
    | 'PENDING_BRAND_REVIEW'
    | 'APPROVED'
    | 'REJECTED';
  deliverable: Deliverable;
};

export type Comment = {
  id: number;
  assetId: number;
  name: string;
  timestamp: string;
  comment: string;
};
