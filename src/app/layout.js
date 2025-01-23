import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*navSection */}
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Blog VIew</a>
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
                <Link href="/"> Login</Link>
              </li>
              <li>
                <Link href="/"> Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
