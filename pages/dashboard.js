import Link from "next/link"
import withPrivateRoute from "../components/withPrivateRoute"

let fromRoute = "/dashboard"

const Dashboard = (props) => {
    console.log(props);
    return (
        <div className="container">
            <h1>This is the dashboard with authentication {props.auth.toString()} state</h1>


            <div className="linkStyle">
                <Link href="/" passHref>Back to home</Link>
            </div>
        </div>
    )
}

export default withPrivateRoute(Dashboard, fromRoute)