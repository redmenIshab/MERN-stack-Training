import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AboutUsSection from "./AboutUs";
import Footer from "./Footer";
import AboutTeamSection from "./AboutTeam";
import CarDetails from "./CarDetails";
import { Outlet } from "react-router-dom";
import "./index.css"
import Signin from "./Signin";
import Signup from "./Signup"


// Navbar Component
function Navbar() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const authenticatedUser = () => {
    setIsUserAuthenticated(true);
    console.log("User authenticated Value", isUserAuthenticated);
  };
  // fetch facebook Posts
  //facebook API KEY
  //FACEBOOKA_API_KEY -> using

  const renderAuthenticationScreen = () => {
    // computations
    return (
      <Link to="/signin" className="navbar-link">
        Sign In
      </Link>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">SaaS Project</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <a href="#about" className="navbar-link">
          About Us
        </a>
        <a href="#team" className="navbar-link">
          Team
        </a>
        {/* User Clicks on Signin -> updates signin to "Get started" */}
        {/* 
        
        {isUserAuthenticated ? (
          <button className="navbar-button">Get Started</button>
        ) : (
          <button className="navbar-button-signin" onClick={authenticatedUser}>
            Sign In
          </button>
        )} */}

        {/* {isUserAuthenticated && (
          <button className="navbar-button">Get Started</button>
        )} */}

        {renderAuthenticationScreen()}
      </div>
    </nav>
  );
}

// properties -> {title , backgroundColor, onPress}
function Button(props) {
  return (
    <div
      style={{
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: props.backgroundColor,
        marginTop: 10,
        padding: 5,
      }}
    >
      <span
        style={{
          textAlign: "center",
          fontSize: 18,
          fontFamily: "cursive",
        }}
      >
        {props.title}
      </span>
    </div>
  );
}
// Landing/Hero Section
function LandingSection() {
  return (
    <section id="home" className="landing-section">
      <div className="landing-content">
        <h1 className="landing-title">One Tool For Doing It All Together</h1>
        <p className="landing-description">
          With comprehensive competitor analysis, detailed web research, and
          strategic internal linking, your articles will be optimized for
          success. Transform your workflow with our AI-powered platform.
        </p>
        <div className="landing-buttons">
          <Button title={"Book a Demo"} backgroundColor={"purple"} />
          <Button title={"Use AI"} backgroundColor={"blue"} />
        </div>
      </div>
    </section>
  );
}
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
// cars
function Car() {
  return (
    <div>
      <h1>car details</h1>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="app-container">




      <Routes>

        <Route path="*" element={<NotFound />} />




        <Route path="/car" element={<Car />}>
          <Route path="details" element={<CarDetails />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />




        <Route path="/" element={
          <>
            <Navbar />
            <LandingSection />
            <AboutUsSection />
            <AboutTeamSection />
            <Footer />
          </>
        } />
      </Routes>
    </div>

  );
}

export default App;
