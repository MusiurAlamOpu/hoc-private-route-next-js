
import Link from 'next/link'

const Home = () => {
  return (
    <div className="container">

      <h1>Welcome, there!</h1>
      <b>Here I gonna implement a Private Route using Higher Order Component (HOC).</b>

      <p>Say, we have this page a home page and we want to go Dashboard page which is within the private route</p>



      <div className="linkStyle">
        <Link href="/dashboard" passHref >Visit dashboard</Link>
      </div>
    </div>
  )
}


export default Home
