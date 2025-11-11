import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AssetHeader from './AssetHeader';
import type { Asset } from '@/types/asset';
import { ExternalLink } from 'lucide-react';

export default function MediaPane({ asset }: { asset: Asset }) {
  return (
    <div className="flex flex-col gap-6">
      <AssetHeader asset={asset} />

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <div className="flex flex-col items-center justify-center w-full lg:w-[250px] lg:h-[480px]">
          <Card className="overflow-hidden py-0 flex-1 bg-black rounded-xl">
            <video src={asset.assetUrl} controls className="w-full aspect-9/16 object-cover" />
          </Card>
          <div className="px-3 py-2 font-semibold text-sm text-center text-muted-foreground">
            Video
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-[250px] lg:h-[480px]">
          <Card className="overflow-hidden py-0 flex-1 bg-black rounded-xl">
            <img
              src={asset.thumbnailUrl}
              alt="Thumbnail"
              className="w-full aspect-9/16 object-cover"
            />
          </Card>
          <div className="px-3 py-2 font-semibold text-sm text-center text-muted-foreground">
            Thumbnail
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase">Sound Used</p>
          <a
            href={asset.soundUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary underline break-all"
          >
            {asset.soundUrl}
            <ExternalLink size={14} />
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase">
            Creator's Caption
          </p>
          <Input
            readOnly
            value={asset.caption}
            className="bg-transparent border text-sm px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
}
