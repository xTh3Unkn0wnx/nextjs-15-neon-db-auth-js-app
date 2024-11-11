/* eslint-disable @next/next/no-img-element */
import { auth } from "@/lib/auth";
import { SignIn } from "@/components/auth/GithubSignIn";
import { SignOut } from "@/components/auth/GithubSignOut";
export default async function Home() {
  const session = await auth();
  return (
    <div>
        {!session?.user && (<SignIn />)}
        {session?.user && (<SignOut />)}
        <h1>Hello</h1>
        {session?.user && (
          <div>
            <h2>Profile</h2>
            <p>Name: {session.user.name}</p>
            <p>Email: {session.user.email}</p>
            <p>Image: <img src={session.user.image ?? ''} alt={session.user.name ?? ''} className="rounded-full h-[120px]" /></p>
          </div>
        )}
    </div>
  );
}
