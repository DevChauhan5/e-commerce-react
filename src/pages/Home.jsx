import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Home