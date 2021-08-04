import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import backgroundImage from "../../Assets/HomePage.jpg"
import ButtonComponent from "../Button/Buttons";
import {Link} from "react-router-dom";
import LanguageComponent from "../AboutPage/LangauageComponent";
// import "./HomePage.css"

// #183153 navy blue

const currentLanguages = ["Javascript", "Python", "C#", "Java", "Golang", "Databases", "SQL", "CSS", "HTML"]
const skills = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

const image_styling = {

    backgroundImage: "url(" + backgroundImage + ")",
    // backgroundColor: "white",
    height: "95vh",
    width: "100vw",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"

}

export default function HomePageComponent() {


    return (


        <Container className="d-flex text-center align-items-center justify-content-center" fluid style={{width: "100vw", height: "100vw", ...image_styling}}>

            <Card className={window.innerWidth > 600 ? "text-center w-75 border border-dark border-5" : "text-center w-100 border border-dark border-5" } style={{
                backgroundColor: `rgb(238, 255, 31)`,
                color: "#570861"
            }}>
                <Card.Title>
                    <h1 className="p-5 h3 fw-bold fst-italic">MY NAME IS WILLIAM WALLITT AND I'M A FULL-STACK WEB DEVELOPER</h1>
                    <Link to="/about" className="text-decoration-none text-dark">
                        <ButtonComponent name="about me &#10140;"/>
                    </Link>
                </Card.Title>

                <Card.Text>
                    <p className="m-2 h3 fw-bold fst-italic p-2 text-center">
                        ________________
                    </p>

                    <Container fluid className="d-flex justify-content-center flex-wrap w-75 mb-5">
                        {currentLanguages.map((currentLanguage, index) => (<LanguageComponent language={currentLanguage} skills={skills[index]}/>
                        ))}
                        <Link to="/projects" className="text-decoration-none text-dark">
                            <ButtonComponent name="see all projects &#10140;"/>
                        </Link>
                    </Container>

                </Card.Text>

            </Card>

        </Container>

    )

}