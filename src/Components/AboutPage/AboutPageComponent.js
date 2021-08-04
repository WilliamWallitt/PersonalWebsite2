import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import backgroundImage from "../../Assets/homePage2.jpg"
import LanguageComponent from "./LangauageComponent";
import TagComponent from "../GithubPage/TagComponent";

const currentLanguages = ["Javascript", "Python", "C#", "Java", "Golang", "DB's", "SQL", "CSS", "HTML"]
const skills = [
    ["React", "Redux", "Router", "P5.js", "Firebase", "Three.js", "Recharts", "RESTFul Routing", "Passport.js", "Mocha", "Chai", "Jasmine", "Mongoose"],
    ["Pandas", "Matplotlib", "Numpy", "Keras", "Tensorflow", "Scikit learn"],
    ["ASP.NET / .NET CORE"],
    ["Android Development", "Multithreading"],
    ["Microservices", "REST API's", "Docker"],
    ["MongoDB", "Postgre SQL", "mySQL server"],
    [],
    [],
    []
]

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {
        backgroundColor: "black",
        height: "400vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"

    }
} else {
    image_styling = {

        backgroundImage: "url(" + backgroundImage + ")",
        // backgroundColor: "white",
        height: "300vh",
        width: "100vw",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"

    }

}


export default function AboutPageComponent() {

    return (

        <Container fluid style={{width: "100vw", height: "200vh", backgroundColor: "white", ...image_styling
        }}>
            <Card className="d-flex align-items-center justify-content-center text-start mx-auto border border-dark border-5" style={{
                backgroundColor: `rgb(255, 255, 255, 0.94)`,
                color: "#570861",

                transform: 'translate(0%, 5%)',
                width: "80vw"
            }}>
                <Card.Title className="p-2">

                    <h1 className="m-5 h3 fw-bold fst-italic p-2 text-center">
                        <TagComponent name="About me" fontSize="h1"/>
                    </h1>

                    <p className="lead fw-bold">
                        I'm a full-stack software engineer, that has just finished at Exeter University with a First Class Honours.
                    </p>

                    <p>
                        I love exploring and experimenting with new technology such as Machine Learning, Search Methods, Data analysis and pre-processing,
                        Animations and Modern Front-End or Back-End Frameworks.
                    </p>

                    <p>
                        I have spent much of the last 3 years (when I started programming) teaching myself both Front-End and Back-End development using Javascript.
                        This was perhaps most exciting way to learn a coding as you always end up with a visual product.
                    </p>

                    <p>
                        Currently I am using the <code>MongoDB, Express.js, React <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="_" style={{width: "25px", height: "25px"}}/>
                        , Node.js </code>(MERN) stack to develop web applications.
                        I also have experience in using <code>RESTful routing</code> in my node.js applications as well as a detailed understanding of <code>Boostrap</code> and <code>CSS Flexbox</code>.
                        I have worked with animations libraries such as <code>P5.js</code> to allow me to visualise certain projects, such as my A* Pathfinding algorithm.
                        I have also worked with 3D graphics libraries such as <code>Three.js</code> and Graphical libraries such as <code>Recharts</code>.
                        I am able to also code in <code>Java</code>, <code>Python</code>, <code>Go</code> and <code>C#(ASP.NET)</code> to a competent level.
                    </p>

                    <p>
                        During University I have developed an android app in Java using android studio. Created an interactive treasure trail web app that helps 1st year students find their way around campus,
                        written my own K-Means-Clustering algorithm for classifying hand written digits in python. For data preprocessing, analysis and representations
                        I have extensively used <code>Pandas</code>, <code>Matplotlib</code>, <code>Numpy</code> and <code>Scikit Learn</code> inside and outside University.
                    </p>

                    <p>
                        For my final year project I developed a Chess AI that combines machine learning with search methods similar to the world renowned AlphaGo, developed back in 2015.
                        This was built using <code> Tensorflow </code>and <code>Keras</code> and the objective was to compare the performance of traditional and new AI methods when applied to the game of Chess.
                        AlphaGo required extensive research into Convolutional neural networks, Supervised and Reinforcement learning and search methods such as the Monte-Carlo tree search and Minimax search.
                    </p>


                    <p className="m-5 h3 fw-bold fst-italic p-2 text-center">
                        <TagComponent name="Skills - click to view more information" fontSize="h3"/>
                    </p>


                </Card.Title>
                <Card.Text>
                    <Container fluid className="d-flex justify-content-center flex-wrap w-75 mb-5">
                        {currentLanguages.map((currentLanguage, index) => (<LanguageComponent language={currentLanguage} skills={skills[index]}/>
                        ))}
                    </Container>
                </Card.Text>
            </Card>
        </Container>
    )

}