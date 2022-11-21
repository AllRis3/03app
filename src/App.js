import stylesheet from "./style.css";
import ProfilePic from "./ProfilePic.js";
import About from './About.js'
import Footer from "./Footer";

export default function App() {
  return (
    <div className='MyPage'>
      <ProfilePic />
      <About />
      <Footer />
    </div>

  )
}


