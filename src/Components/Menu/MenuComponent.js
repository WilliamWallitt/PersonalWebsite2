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
                <Navbar expand="md" sticky className="sticky-top" style={{backgroundColor: "rgb(240, 231, 219)"}}>

                    {/*<NavLink className="h6 text-start">*/}
                    {/*    <Link to="/">*/}
                    {/*        <img src={image} style={{maxHeight: "100px", maxWidth: "70px"}}/>*/}
                    {/*    </Link>*/}
                    {/*</NavLink>*/}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/" className="text-decoration-none text-dark">
                                    {/*<ButtonComponent name="Home" backgroundColor="transparent"/>*/}
                                    <h1 style={{fontSize: "1.3rem"}}>
                                        Home
                                    </h1>
                                </Link>
                            </NavLink>
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/about" className="text-decoration-none text-dark">
                                    {/*<ButtonComponent name="About" backgroundColor="transparent"/>*/}
                                    <h1 style={{fontSize: "1.3rem"}}>
                                        About
                                    </h1>
                                </Link>
                            </NavLink>
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/github" className="text-decoration-none text-dark">
                                    {/*<ButtonComponent name="Github" backgroundColor="transparent"/>*/}
                                    <h1 style={{fontSize: "1.3rem"}}>
                                        Github
                                    </h1>
                                </Link>
                            </NavLink>
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/projects" className="text-decoration-none text-dark">
                                    <h1 style={{fontSize: "1.3rem"}}>
                                        Projects
                                    </h1>
                                    {/*<ButtonComponent name="Projects" backgroundColor="transparent"/>*/}
                                </Link>
                            </NavLink>
                            <NavLink className="h6 text-start p-1 m-1">
                                <Link to="/contact" className="text-decoration-none text-dark">
                                    {/*<ButtonComponent name="Contact" backgroundColor="transparent"/>*/}
                                    <h1 style={{fontSize: "1.3rem"}}>
                                        Contact
                                    </h1>
                                </Link>
                            </NavLink>

                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

                <Switch>
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