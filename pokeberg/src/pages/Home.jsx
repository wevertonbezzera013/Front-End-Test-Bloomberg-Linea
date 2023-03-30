import React from "react";
import { PokeCard, MyHeader, MyFooter } from "../components";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <MyHeader />
      <main className="container">
        <div className="main-text">
          <h1>Welcome to our website!</h1>
          <p>
            We are a company that specializes in creating beautiful and
            functional websites for businesses of all sizes.
          </p>
        </div>

        <section className="services-section">
          <h2>Our Services</h2>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Search Engine Optimization</li>
          </ul>
        </section>

        <PokeCard />

        <section className="form-section">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
        <figure className="figure">
          <img
            className="example-image"
            src="example-image.jpg"
            alt="A beautiful view of nature"
          />
          <figcaption>A beautiful image of nature</figcaption>
        </figure>
      </main>
      <MyFooter />
    </>
  );
};

export default Home;
