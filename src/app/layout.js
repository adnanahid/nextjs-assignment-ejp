import Link from "next/link";
import "./globals.css";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
{
  /* <RegisterLink>Sign up</RegisterLink> */
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*navSection */}
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <button className="btn btn-ghost text-xl">Blog VIew</button>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/"> Home</Link>
              </li>
              <li>
                <Link href="/profile"> Profile</Link>
              </li>
              <li>
                <LoginLink>Sign in</LoginLink>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
