import Link from "next/link";
import { setCookieInCookieStore } from "../cookies/CookieStore";
import { useRouter } from "next/router";


const Login = () => {
    const router = useRouter();

    const hanldeLogin = () => {

        setCookieInCookieStore("IS_SIGNED_IN", true, 20);
        router.push("/dashboard");

    }

    return (
        <div className="container">
            <h1>This is login page</h1>

            <button className="linkStyle" onClick={hanldeLogin}>Login now</button>

            <div className="linkStyle">
                <Link href="/" passHref>Back to home</Link>
            </div>
        </div>
    )
}

export default Login;