import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import backgroundImage from "../../Assets/homePage2.jpg"
import ButtonComponent from "../Button/Buttons";
import {Link} from "react-router-dom";
import LanguageComponent from "../AboutPage/LangauageComponent";
import TagComponent from "../GithubPage/TagComponent";
// import {image_styling} from "../../Styles/BackgroundImage";
// import {image_styling} from "../../Styles/BackgroundImage";

// #183153 navy blue

const currentLanguages = ["Javascript", "Python", "C#", "Java", "Golang", "Databases", "SQL", "CSS", "HTML"]

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {
        backgroundColor: "black",
        backgroundSize: "cover",
        height: "100vh",
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


        <Container className="d-flex text-center align-items-center justify-content-center" fluid style={{width: "100vw", height: "100vw", ...image_styling}}>

            <Card className={window.innerWidth > 600 ? "text-center w-75 border border-dark border-5" : "text-center w-100 border border-dark border-5" } style={{
                backgroundColor: `rgb(255, 255, 255, 0.94)`,
                color: "#570861"
            }}>
                <Card.Title>
                    <h1 className="p-5 h3 fw-bold fst-italic">MY NAME IS WILLIAM WALLITT AND I'M A FULL-STACK WEB DEVELOPER</h1>
                    <Link to="/about" className="text-decoration-none text-white">
                        <ButtonComponent name="about me &#10140;" backgroundColor="#570861"/>
                    </Link>
                </Card.Title>

                <Card.Text>
                    <p className="m-2 h3 fw-bold fst-italic p-2 text-center">
                        ________________
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