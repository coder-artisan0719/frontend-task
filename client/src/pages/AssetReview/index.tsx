import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAsset } from '@/hooks/useAsset';
import { useComments } from '@/hooks/ useComments';
import MediaPane from '@/components/review/ MediaPane';
import OverviewPane from '@/components/review/OverviewPane';
import { useParams } from 'react-router';
import { CommentComposer, CommentList } from '@/components/review/comments';

export default function AssetReviewPage() {
  const { assetId } = useParams();
  const id = Number(assetId);
  const { data: asset, isLoading } = useAsset(id);
  const { list: commentsQ, add: addComment } = useComments(id);

  if (isLoading) return <div className="p-6 text-muted-foreground">Loading...</div>;

  if (!asset)
    return (
      <div className="p-6 text-muted-foreground h-screen flex items-center justify-center">
        Not found.
      </div>
    );

  return (
    <div className="flex w-full flex-col lg:flex-row bg-background text-foreground lg:h-screen">
      {/* Left: Media panel */}
      <div className="flex flex-col h-full flex-1 p-6 lg:w-2/3 border-r border-gray-400">
        <MediaPane asset={asset} />
      </div>

      {/* Right: Overview/Messages panel */}
      <div className="flex flex-col lg:w-1/3 h-full overflow-hidden">
        <Tabs defaultValue="overview" className="flex-1 w-full flex flex-col h-full">
          <div className="p-6">
            <TabsList className="flex justify-around bg-background w-full rounded-none">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="flex-1">
            <ScrollArea className="h-full">
              <OverviewPane asset={asset} />
            </ScrollArea>
          </TabsContent>

          <TabsContent value="messages" className="flex flex-col flex-1 h-full overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-hidden">
              <ScrollArea className="lg:flex-1 h-[500px] lg:h-[unset] overflow-y-auto px-4 pb-24">
                <CommentList comments={commentsQ.data ?? []} />
              </ScrollArea>

              <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800 bg-background p-3">
                <CommentComposer
                  onSend={(t) => addComment.mutate(t)}
                  disabled={addComment.isPending}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
