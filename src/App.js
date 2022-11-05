import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

// Create a home page component => App component...
function Home() {
  return (
    <section className="home-container">
      <h1>Home</h1>
      <p> This is the home page.</p>
      <link rel="canonical" href="/" />
      <section className="navigation">
        <p>Click the link below to go to the next page.</p>
        <NavLink className="navigate" to="/">
          Home page
        </NavLink>
        <NavLink className="navigate" to="/about">
          About page
        </NavLink>
      </section>
    </section>
  );
}

// Create a about page component => App component...
function About() {
  return (
    <section className="about-container">
      <h1>About</h1>
      <p> This is the about page.</p>
      <link rel="canonical" href="/about" />
      <section className="navigation">
        <p>Click the link below to go to the next page.</p>
        <Link className="navigate" to="/">
          Home page
        </Link>
        <Link className="navigate" to="/about">
          About page
        </Link>
      </section>
    </section>
  );
}

// create a 404 page component => App component....
const Notfound = () => {
  return <h1>404 Page Not Found</h1>;
};

// create our root component => App component...
function App() {
  return (
    <section className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </section>
  );
}

export default App;
