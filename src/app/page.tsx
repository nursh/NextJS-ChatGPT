import { auth } from "@/auth";

import { Separator } from "@/components/ui/separator";
import Chat from "@/app/components/Chat";


export default async function Home() {
  const session = await auth();
  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Welcome To GPT Chat</h1>
      {!session?.user?.email && <div>You need to log in to use this chat.</div>}
      {session?.user?.email && (
        <div>
          <Separator className="my-5" />
          <Chat />
        </div>
      )}
    </main>
  );
}