import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="/" style={{ marginLeft: "20px", fontSize: "1.5rem" }}>The Breaking Bad</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto" style={{ marginRight: "20px" }} >
                        <li class="nav-item active" style={{ marginRight: "20px" }} >
                            <Link class="nav-link btn btn-dark" exact to="/" >Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active" style={{ marginRight: "20px" }} >
                            <Link class="nav-link btn btn-outline-dark" exact to="/About">About Movei</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
