
import Wrapper from "../assets/wrappers/LandingPage"
import MainImg from "../components/mainImg"
import LogoImg from "../components/logo"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <Wrapper>
    <nav>
      <LogoImg/>
    </nav>
    <div className="container page">
      <div className="info">
        <h1>Job<span>tracking</span>App</h1>
        <p>I&apos;m baby actually chicharrones chillwave gorpcore kickstarter, sustainable snackwave bruh fixie distillery ennui man braid bespoke deep v celiac. Meggings locavore etsy, slow-carb vice disrupt venmo try-hard.</p>
        <Link to="register" className="btn register-link">Register</Link>
        <Link to="register" className="btn login-link">Login / Demo User</Link>
      </div>
    <MainImg/>
    </div>
    </Wrapper>
  )
}
