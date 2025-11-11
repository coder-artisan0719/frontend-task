import type { Comment } from '@/types/asset';
import { CommentItem } from './CommentItem';

export function CommentList({ comments }: { comments: Comment[] }) {
  if (!comments?.length) return null;

  return (
    <div className="p-5 space-y-8">
      {comments.map((c) => (
        <CommentItem key={c.id} name={c.name} text={c.comment} timestamp={c.timestamp} />
      ))}
    </div>
  );
}
