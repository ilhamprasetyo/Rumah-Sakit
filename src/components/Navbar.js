import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <section id="navbar">
          <div class="fixed-top">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="col my-auto text-nowrap">
              <span><strong>Rumah Sakit Sehat Waras</strong></span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-md-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">Contact</Link>
                </li>  
                <li class="nav-item">
                  <Link class="nav-link" to="/review">Review</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="http://localhost:8000">Login</a>
                </li>             
              </ul>
            </div>
          </nav>
          </div>
        </section>
      </div>

    );
  }
}

export default Navbar
