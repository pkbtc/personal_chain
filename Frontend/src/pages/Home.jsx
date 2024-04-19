import Hero from "../components/Hero"
import NavBar from "../components/NavBar";
import CPA from "../components/CPA"

const Home = () => {
  return (
    <div className="h-full">
      <NavBar/>
      <Hero/>
      <CPA/>
    </div>
  )
}

export default Home
