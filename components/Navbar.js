import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { deleteCookieFromCookieStore, getCookieFromCookieStore } from "../cookies/CookieStore";

const Navbar = () => {

    const router = useRouter();

    const [isSignedIn, setIsSignedIn] = useState(getCookieFromCookieStore("IS_SIGNED_IN"));

    const logoutNow = () => {
        deleteCookieFromCookieStore("IS_SIGNED_IN");
        router.push("/");
    }

    const handleLogout = () => {
        isSignedIn ? logoutNow() : router.push("/login");
    }

    useEffect(() => {
        setIsSignedIn(getCookieFromCookieStore("IS_SIGNED_IN"));
    }, [router]);

    return (
        <nav className="navbarStyle">
            <div>
                <p>HOCprivate-route</p>
            </div>
            <div>
                <button className="linkStyle" onClick={handleLogout}>{isSignedIn ? "Logout" : "Login"}</button>
            </div>
        </nav>
    )
}

export default Navbar;