import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import ButtonComponent from "../Button/Buttons";
import {Link} from "react-router-dom";
import TagComponent from "../GithubPage/TagComponent";
import "./Title.scss"
import "./cloud.css"
import {D_GGX} from "three/examples/jsm/renderers/nodes/functions/BSDFs";
import VoxelDog from "./Model/dog";

//  #87CEEB skyblue
// #183153 navy blue

const currentLanguages = ["Javascript", "Python", "C#", "Java", "Golang", "Databases", "SQL", "CSS", "HTML"]

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {
        // backgroundColor: "black",
        // backgroundImage: "url(" + mobileBackgroundImage + ")",
        color: "#69B0CD",
        background: "rgb(240, 231, 219)",
        backgroundPosition: "left, left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        backgroundAttachment: "fixed"

    }
} else {
    image_styling = {

        // backgroundImage: "url(" + test + ")",
        //     // backgroundColor: "white",
        color: "#69B0CD",
        background: "rgb(240, 231, 219)",
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"

    }

}



export default function HomePageComponent() {


    return (
        <div style={{width: "100vw", height: "50vh", ...image_styling}}>
            <Row>
                <VoxelDog/>
            </Row>
            <Row>
                <Container className="d-flex text-center align-items-center justify-content-center" fluid>

                    {/* border border-dark border-5*/}
                    <Card className={window.innerWidth > 600 ? "text-center w-50 shadow shadow-lg" : "text-center w-100 shadow shadow-lg" } style={{
                        backgroundColor: `rgb(240, 231, 219)`,
                        // backgroundColor: "rgb(255, 255, 255, 0.65)",
                        // color: "#570861"
                    }}>
                        <Card.Title>


                            <h1 className="p-5 fw-bold fst-italic mt-5" data-heading="" id="lead">
                                <TagComponent name="Hello, I'm a full-stack web developer based in London &nbsp;" backgroundColor="rgb(255, 255, 255, 0.7)">
                                    <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" className="" alt="_" style={{width: "25px", height: "25px"}}/>
                                </TagComponent>

                            </h1>

                            <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem"}} className="mx-3">
                                William De Stanford
                            </h1>

                            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3">
                                Web programmer
                            </p>
                            {/*<Link to="/about" className="text-decoration-none text-white">*/}
                            {/*    <ButtonComponent name="about me &#10140;" backgroundColor="#87CEEB"/>*/}
                            {/*</Link>*/}

                            <Link to="/projects">
                                <div className="mt-4">
                                    <ButtonComponent name="see all projects &#10140;" backgroundColor="#87CEEB"/>
                                </div>
                            </Link>

                        </Card.Title>

                        {/*<Card.Text>*/}
                        {/*    <p className="m-2 h3 p-2">*/}

                        {/*    </p>*/}

                        {/*    <Container fluid className="d-flex justify-content-center flex-wrap w-75 mb-5">*/}
                        {/*        {currentLanguages.map((currentLanguage) => (<ButtonComponent name={currentLanguage}/>*/}
                        {/*        ))}*/}
                        {/*        <Link to="/projects" className="text-decoration-none text-white">*/}
                        {/*            <ButtonComponent name="see all projects &#10140;" backgroundColor="#87CEEB"/>*/}
                        {/*        </Link>*/}
                        {/*    </Container>*/}

                        {/*</Card.Text>*/}

                    </Card>
                </Container>

            </Row>
        </div>

    )

}