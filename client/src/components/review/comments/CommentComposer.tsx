import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function CommentComposer({
  onSend,
  disabled,
}: {
  onSend: (text: string) => void;
  disabled?: boolean;
}) {
  const [value, setValue] = useState('');
  const send = () => {
    const t = value.trim();
    if (!t) return;
    onSend(t);
    setValue('');
  };

  return (
    <div className="sticky bottom-0">
      <div className="flex gap-3 items-center">
        <Input
          placeholder="Write a comment..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          className="rounded-xl h-11"
        />
        <Button onClick={send} disabled={disabled} className="h-11 rounded-xl px-5">
          Send
        </Button>
      </div>
    </div>
  );
}
