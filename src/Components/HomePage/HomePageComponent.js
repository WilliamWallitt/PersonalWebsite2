import React from "react";
import {Card, Container, Row, Col, Image} from "react-bootstrap";
import ButtonComponent from "../Button/Buttons";
import {Link} from "react-router-dom";
import TagComponent from "../GithubPage/TagComponent";
import "./Title.scss"
import "./cloud.css"
import VoxelDog from "./Model/dog";
import avatar from "../../Assets/willavatar.jfif"
import "../Button/test_button.css"

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
        height: "150vh",
        width: "100vw",
        backgroundAttachment: "fixed"

    }
} else {
    image_styling = {

        // backgroundImage: "url(" + test + ")",
        //     // backgroundColor: "white",
        color: "#69B0CD",
        background: "rgb(240, 231, 219)",
        height: "150vh",
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

                <Container className="d-flex text-center align-items-center justify-content-center" fluid>


                    <Card className={window.innerWidth > 920 ? "text-center w-25 border-0" : window.innerWidth < 600 ? "text-center w-100 border-0" : "text-center w-50 border-0" } style={{
                        backgroundColor: `rgb(240, 231, 219)`,
                        // backgroundColor: "rgb(255, 255, 255, 0.65)",
                        // color: "#570861"
                    }}>
                        <Card.Title>

                            <h1 className="p-5 fw-bold fst-italic" data-heading="">
                                <TagComponent name="Hello, I'm a full-stack web developer based in London &nbsp;" backgroundColor="rgb(255, 255, 255, 0.3)" fontSize="16px">
                                    <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" className="" alt="_" style={{width: "25px", height: "25px"}}/>
                                </TagComponent>

                            </h1>

                            <Row>

                                <Col className="col-9">
                                    <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem"}} className="mx-3">
                                        William De Stanford
                                    </h1>

                                    <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3">
                                        Web programmer
                                    </p>
                                </Col>
                                <Col>
                                    <Image src={avatar} roundedCircle style={{border: "solid", borderColor:"white", borderWidth: "2px"}}/>
                                </Col>


                            </Row>
                        </Card.Title>
                    </Card>
                </Container>
            </Row>
            <Row>
                <VoxelDog/>
            </Row>
            <Row>
                <Container className="d-flex text-center align-items-center justify-content-center" fluid>

                    {/* border border-dark border-5*/}
                    <Card className={window.innerWidth > 600 ? "text-center w-25 border-0" : "text-center w-100 border-0" } style={{
                        backgroundColor: `rgb(240, 231, 219)`,
                        // backgroundColor: "rgb(255, 255, 255, 0.65)",
                        // color: "#570861"
                    }}>
                        <Card.Title>

                            <Link to="/projects">
                                <div className="mt-4">
                                    <div className="test_button_large m-4">See all projects &#10140;</div>
                                    {/*<ButtonComponent name="see all projects &#10140;" backgroundColor="#87CEEB"/>*/}
                                </div>
                            </Link>

                            <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem", textDecoration: "underline"}} className="mx-3">
                                Bio
                            </h1>

                            <Row className="my-2">
                                <Col>
                                    <p style={{fontWeight: "normal", fontSize: "1rem", textAlign: "start"}} className="mx-3">
                                        <div style={{fontWeight: "bolder", display: "inline-block"}}>1997&nbsp;&nbsp;&nbsp;</div>  Born in London
                                    </p>
                                </Col>
                            </Row>
                            <Row className="my-2">
                                <Col>
                                    <p style={{fontWeight: "normal", fontSize: "1rem", textAlign: "start"}} className="mx-3">
                                        <div style={{fontWeight: "bolder", display: "inline-block"}}>2015&nbsp;&nbsp;&nbsp;</div>  Finished Alevels at Oundle School with A,A,A in Maths, Phyiscs and Religious Studies
                                    </p>
                                </Col>
                            </Row>
                            <Row className="my-2">
                                <Col>
                                    <p style={{fontWeight: "normal", fontSize: "1rem", textAlign: "start"}} className="mx-3">
                                        <div style={{fontWeight: "bolder", display: "inline-block"}}>2021&nbsp;&nbsp;&nbsp;</div>   Graduated the University of Exeter with 1st class honours (78%)
                                    </p>
                                </Col>
                            </Row>
                            <Row className="my-2">
                                <Col>
                                    <p style={{fontWeight: "normal", fontSize: "1rem", textAlign: "start"}} className="mx-3">
                                        <div style={{fontWeight: "bolder", display: "inline-block"}}>2021 to present&nbsp;&nbsp;&nbsp;</div> Works at Discover.ai as a Software Engineer
                                    </p>
                                </Col>
                            </Row>



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