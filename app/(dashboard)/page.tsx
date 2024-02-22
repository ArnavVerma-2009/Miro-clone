"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { EmptyOrg } from "./_components/EmptyOrg";
import { BoardList } from "./_components/BoardList";
import { useSearchParams } from "next/navigation";

const DashboardPage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || undefined;
  const favorites = searchParams.get("favorites") || undefined;
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={{ search, favorites }} />
      )}
    </div>
  );
};

export default DashboardPage;
