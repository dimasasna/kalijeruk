import Album from "../components/album/Album"
import Footer from "../components/footer/Footer"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import Profil from "../components/profil/Profil"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Profil/>
      <Album/>
      <Footer/>
    </div>
  )
}

export default Home
