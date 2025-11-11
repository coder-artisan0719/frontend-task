import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function CommentAvatar({ name, src }: { name: string; src?: string }) {
  const fallback = (name ?? '?').trim().charAt(0).toUpperCase();
  return (
    <Avatar className="w-9 h-9 ring-1 ring-white/10">
      {src ? <AvatarImage src={src} /> : null}
      <AvatarFallback className="bg-linear-to-br from-neutral-800 to-neutral-700 text-white">
        {fallback || '?'}
      </AvatarFallback>
    </Avatar>
  );
}
