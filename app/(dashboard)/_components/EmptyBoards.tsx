"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    }).then((id) => {
      toast.success("Board Created")
      // TODO : redirect to board/{id}
    }).catch(() => toast.error("An error occured"));
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src={"/note.svg"} alt="empty-boards" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board !</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create a board to see it appear here
      </p>

      <Button disabled={pending} className="mt-2" onClick={onClick}>
        Create a board <Plus className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};