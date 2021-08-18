import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import backgroundImage from "../../Assets/homePage2.jpg"
import mobileBackgroundImage from "../../Assets/mobileHomePage.png"
import ButtonComponent from "../Button/Buttons";
import {Link} from "react-router-dom";
import TagComponent from "../GithubPage/TagComponent";
import "./Title.scss"

// #183153 navy blue

const currentLanguages = ["Javascript", "Python", "C#", "Java", "Golang", "Databases", "SQL", "CSS", "HTML"]

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {
        // backgroundColor: "black",
        backgroundImage: "url(" + mobileBackgroundImage + ")",
        backgroundPosition: "left, left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90vh",
        width: "100vw",
        backgroundAttachment: "fixed"

    }
} else {
    image_styling = {

        backgroundImage: "url(" + backgroundImage + ")",
            // backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"

    }

}



export default function HomePageComponent() {


    return (


        <Container className="d-flex text-center align-items-center justify-content-center" fluid style={{width: "100vw", height: "90vh", ...image_styling}}>
            {/* border border-dark border-5*/}
            <Card className={window.innerWidth > 600 ? "text-center w-75" : "text-center w-100" } style={{
                // backgroundColor: `rgb(255, 255, 255, 0.94)`,
                backgroundColor: "transparent",
                color: "#570861"
            }}>
                <Card.Title>

                    {/*<h1 className="p-5 h3 fw-bold fst-italic">HI, I'M WILL AND I'M A FULL-STACK WEB DEVELOPER &nbsp;*/}
                    {/*    <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="_" style={{width: "25px", height: "25px"}}/>*/}
                    {/*</h1>*/}

                    <h1 className="p-5 fw-bold fst-italic" data-heading="" id="h1">
                        HI, I'M WILL, AND I'M A FULL-STACK WEB DEVELOPER &nbsp;
                        <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="_" style={{width: "25px", height: "25px"}}/>
                    </h1>

                    <Link to="/about" className="text-decoration-none text-white">
                        <ButtonComponent name="about me &#10140;" backgroundColor="#570861"/>
                    </Link>

                </Card.Title>

                <Card.Text>
                    <p className="m-2 h3 p-2">

                    </p>

                    <Container fluid className="d-flex justify-content-center flex-wrap w-75 mb-5">
                        {currentLanguages.map((currentLanguage) => (<TagComponent name={currentLanguage}/>
                        ))}
                        <Link to="/projects" className="text-decoration-none text-white">
                            <ButtonComponent name="see all projects &#10140;" backgroundColor="#570861"/>
                        </Link>
                    </Container>

                </Card.Text>

            </Card>

        </Container>

    )

}