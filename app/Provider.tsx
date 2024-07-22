"use client";
import Loader from "@/components/Loader";
import { getClerkuser } from "@/lib/actions/user.actions";
import {
  ClientSideSuspense,
  LiveblocksProvider,
} from "@liveblocks/react/suspense";
import React, { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkuser({ userIds });
        return users;
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
