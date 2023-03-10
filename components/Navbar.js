import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "@/store/AuthContext";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} alt="rupee" />
        <h1>Gaming Vibes</h1>
        {authReady && (
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/guides">Guides</Link>
            </li>
            {!user && (
              <li onClick={login} className="btn">
                Login/SignUp
              </li>
            )}
            {user && (
              <li>
                Logged in as: <strong> {user.user_metadata.full_name}</strong>
              </li>
            )}
            {user && (
              <li onClick={logout} className="btn">
                Log out
              </li>
            )}
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} alt="banner" />
      </div>
    </div>
  );
}
