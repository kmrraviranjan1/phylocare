import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import HomePageMain from "../components/homepage/HomePageMain"

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col justify-around">
        <Navbar />
    
        <HomePageMain/>
    
        <Footer />
    </div>
  )
}

export default HomePage