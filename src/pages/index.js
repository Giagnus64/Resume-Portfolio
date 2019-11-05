import React from 'react';

import Layout from '../components/Layout';
import RubyIcon from '../components/RubyIcon'
import RailsIcon from '../components/RailsIcon'

//import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5 ml-1">
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Full stack web developer experienced in Rails, JavaScript, and React.
With a music production background, I am experienced in detail-oriented, systematic thinking while being mindful of larger goals. My transition to web development is a product of my experience with audio/visual technologies in the application of impactful project execution.

          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Mangia</h3>
              <div className="subheading mb-3">A web application designed to help users plan and keep track of meals and recipes.</div>
              <ul>
                <li>Developed a Rails API backend with custom routes and search functionality</li>
                <li>Generated UI using React, Bulma CSS framework, and Redux</li>
                <li>Utilized Edamam API to search recipes by ingredient</li>
                <li>Leveraged Google's Firebase services for image upload functionality</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"><a href="https://github.com/Giagnus64/Mangia-API">Github</a> | <a href="https://mangia-client.herokuapp.com/login">Live</a></span>
            </div>
          </div>
          
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Bedfellows</h3>
              <div className="subheading mb-3">A webapp that connects users and allows them to manage their relationships with each other.</div>
              <ul>
                <li>Configured a Rails API backend for ease of use and scalability</li>
                <li>Designed client interface using React with Semantic UI styling framework </li>
                <li>Implemented Auth using BCrypt for Password Storage and JWT for Token Creation</li>
                <li>Utilized React Router for Client-Side Routing</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"><a href="https://github.com/Giagnus64/Bedfellows-Front-End">Github</a> | <a href="https://bedfellows-client.herokuapp.com/">Live</a></span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Chitter-Chatter</h3>
              <div className="subheading mb-3">A messaging app that plays sounds and animations with every message.</div>
              <ul>
                <li>Programmed an API with Rails for database management and quick setup</li>
                <li>Designed UI using custom CSS and JS</li>
                <li>Scripted animations using vector graphics library Paper.js</li>
                <li>Linked sounds to keypresses using JavaScript music library Howler.js</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"><a href="https://github.com/Giagnus64/Chitter-Chatter-Front-End">Github</a> | <a href="#">Live</a></span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab rails"><RubyIcon/></i>
            </li>
            <li className="list-inline-item">
              <i className="fab rails"><RailsIcon/></i>
            </li>
          </ul>

          <div className="subheading mb-3">Proficiencies</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              <strong>Languages |</strong> Italian - <em>Native Speaker</em>, Spanish - <em>Intermediate</em>
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              <strong>A/V Tools |</strong> Pro Tools, Logic Pro X, Audacity, Final Cut Pro 
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              <strong>Retail Experience |</strong> Customer Service, Sales, Store Management
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              <strong>Music |</strong>  Percussion/Drums - <em>17 years</em>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Flatiron School</h3>
              <div className="subheading mb-3">Software Engineering Intensive</div>
            
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2019 - October 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Georgetown University</h3>
              <div className="subheading mb-3">BA, American Musical Culture</div>
              <div>
                <strong>Award |</strong> Creative Excellence and Sustained Leadership - <em>May 2014</em></div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2010 - May 2014</span>
            </div>
          </div>
        </div>
      </section>

      {/* <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section> */}

    </div>
  </Layout>
);

export default IndexPage;
