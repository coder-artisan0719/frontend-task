import dayjs from 'dayjs';
import { CommentAvatar } from './CommentAvatar';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

type CommentItemProps = {
  name: string;
  text: string;
  timestamp: string;
  avatarUrl?: string;
};

/** turns raw text into jsx with url + mm:ss chips */
function renderRich(text: string) {
  const urlRe = /(https?:\/\/[^\s]+)/g;
  const timeRe = /\b(\d{1,2}:\d{2})\b/g;

  const parts = text
    .split(urlRe)
    .flatMap((p) => p.split(timeRe))
    .filter(Boolean);

  return parts.map((part, i) => {
    if (/^https?:\/\//.test(part)) {
      const host = safeHost(part);
      return (
        <a
          key={`u-${i}`}
          href={part}
          target="_blank"
          className="text-lime-400 underline decoration-lime-400/50 underline-offset-2 wrap-break-word"
        >
          {host}
        </a>
      );
    }
    if (/^\d{1,2}:\d{2}$/.test(part)) {
      return (
        <span
          key={`t-${i}`}
          className="inline-flex items-center gap-1 text-lime-400 bg-lime-400/10 rounded-full px-2 py-0.5 text-xs font-medium"
        >
          <Clock className="w-3.5 h-3.5" />
          {part}
        </span>
      );
    }
    return <span key={`p-${i}`}>{part}</span>;
  });
}

function safeHost(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export function CommentItem({ name, text, timestamp, avatarUrl }: CommentItemProps) {
  const match = name.match(/^(.*?)(\s*\((.+)\))?$/);
  const displayName = match?.[1]?.trim() || name;
  const role = match?.[3];

  return (
    <div className="flex items-start gap-3">
      <CommentAvatar name={displayName} src={avatarUrl} />

      <div className="flex-1">
        <div className="mb-2">
          <span className="font-semibold">{displayName}</span>
          {role ? <span className="text-muted-foreground text-sm"> ({role})</span> : null}
        </div>

        <div
          className={cn(
            'bg-[#1a1a1a] border border-white/5 shadow-sm rounded-2xl',
            'px-4 py-3 text-sm leading-relaxed text-foreground'
          )}
        >
          {renderRich(text)}
        </div>

        <div className="text-xs text-end text-muted-foreground mt-2">
          {dayjs(timestamp).format('MMM DD, HH:mm')}
        </div>
      </div>
    </div>
  );
}
