import React from "react";
import ButtonComponent from "../Button/Buttons";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import HomePageComponent from "../HomePage/HomePageComponent";
import AboutPageComponent from "../AboutPage/AboutPageComponent";
import GitHubComponent from "../GithubPage/GitHubComponent";
import ProjectsComponent from "../ProjectsPage/ProjectsComponent";
import SpotifyHomePage from "../SpotifyPage/SpotifyHomePage";
import image from "../../Assets/logo.PNG"
import TagComponent from "../GithubPage/TagComponent";
import ContactComponent from "../ContactPage/ContactComponent";



export default function MenuComponent() {


    return (

        <Router>
            <div>
                <Navbar expand="md" sticky className="border border-dark shadow-lg sticky-top bg-white">

                    {/*<NavLink className="h6 text-start">*/}
                    {/*    <Link to="/">*/}
                    {/*        <img src={image} style={{maxHeight: "100px", maxWidth: "70px"}}/>*/}
                    {/*    </Link>*/}
                    {/*</NavLink>*/}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2 border-dark"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/" className="text-decoration-none text-dark">
                                    <ButtonComponent name="Home"/>
                                </Link>
                            </NavLink>
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/about" className="text-decoration-none text-dark"><ButtonComponent name="About"/></Link>
                            </NavLink>
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/github" className="text-decoration-none text-dark"> <ButtonComponent name="Github"/></Link>
                            </NavLink>
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/projects" className="text-decoration-none text-dark"><ButtonComponent name="Projects"/></Link>
                            </NavLink>
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/spotify" className="text-decoration-none text-dark"> <ButtonComponent name="Spotify"/></Link>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>

                    <NavLink className="text-start p-1 m-1">
                        <Link to="/contact" className="text-decoration-none text-dark">
                            <TagComponent name="Contact" backgroundColor="black"/>
                        </Link>
                    </NavLink>

                </Navbar>

                <Switch>
                    <Route path="/spotify">
                        <SpotifyHomePage/>
                    </Route>
                    <Route path="/projects">
                        <ProjectsComponent/>
                    </Route>
                    <Route path="/github">
                        <GitHubComponent/>
                    </Route>
                    <Route path="/about">
                        <AboutPageComponent/>
                    </Route>
                    <Route path="/contact">
                        <ContactComponent/>
                    </Route>

                    <Route path='/projects/astar' component={() => {
                        window.location.href = 'https://astaralgorithm.herokuapp.com/';
                        return null;
                    }}/>

                    <Route path='/projects/stcezair' component={() => {
                        window.location.href = 'https://stcezaire.herokuapp.com/';
                        return null;
                    }}/>

                    <Route path='/projects/clone' component={() => {
                        window.location.href = 'https://nameless-ravine-50180.herokuapp.com/';
                        return null;
                    }}/>

                    <Route path="/">
                        <HomePageComponent/>
                    </Route>
                </Switch>
            </div>
        </Router>

    )

}