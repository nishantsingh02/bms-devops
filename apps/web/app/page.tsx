import { client } from "@repo/db/client";
// that client is the same name which we write on the export name in package.json

export default async function Home() {
  const user = await client.user.findFirst();
  return (
   <div>
    {user?.username}
    {user?.password}
   </div>
  );
}
