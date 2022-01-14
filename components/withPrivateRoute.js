import React from "react";
import { getCookieFromCookieStore } from "../cookies/CookieStore";

const withPrivateRoute = (OriginalComponent) => {
    class NewComponent extends React.Component {

        state = {
            auth: getCookieFromCookieStore("IS_SIGNED_IN"),
        }

        render() {
            const { auth } = this.state;
            auth === undefined && typeof window !== "undefined" && window.location.replace("/login");

            return auth ? <OriginalComponent auth={auth} /> : <div></div>
        }
    }

    return NewComponent
}


export default withPrivateRoute