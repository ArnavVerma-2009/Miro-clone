import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import { Info, InfoSkeleton } from "./Info";
import { Participants, ParticipantsSkeleton } from "./Participants";
import { Toolbar, ToolbarSkeleton } from "./Toolbar";

export const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-900 text-white touch-none flex items-center justify-center">
      <Loader2 className="h-6 w-6 text-neutral-200 animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
