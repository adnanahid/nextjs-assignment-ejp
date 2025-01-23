import Link from "next/link";
import "./globals.css";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }) {
  let user = null;
  try {
    const { getUser } = getKindeServerSession();
    user = await getUser();
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }

  return (
    <html lang="en">
      <body>
        {/* Navigation Section */}
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              Blog View
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal">
              <li>
                <Link href="/">Home</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li>
                    <LogoutLink>Logout</LogoutLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <LoginLink>Login</LoginLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
