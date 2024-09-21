import Client from "./client";
import Server from "./server";

export default function Home() {
  return (
      <main className="p-5">
        <h1 className="text-4xl font-bold">Welcome to GPT Chat</h1>
        <Client />
        <Server />
      </main>
  );
}
