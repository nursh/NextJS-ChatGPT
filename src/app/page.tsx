import { auth } from "@/auth";

import { Separator } from "@/components/ui/separator";
import Chat from "@/app/components/Chat";
import { Suspense } from "react";
import PreviousChats from "./components/PreviousChats";


export default async function Home() {
  const session = await auth();
  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Welcome To GPT Chat</h1>
      {!session?.user?.email && <div>You need to log in to use this chat.</div>}
      {session?.user?.email && (
        <div>
          <Suspense fallback={<div>Loading Previous Chats</div>}>
            <PreviousChats />
          </Suspense>
          <Separator className="my-5" />
          <Chat />
        </div>
      )}
    </main>
  );
}