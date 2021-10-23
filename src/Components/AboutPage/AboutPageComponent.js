import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import LanguageComponent from "./LangauageComponent";
import AboutButtonComponent from "./AboutButton";


const currentLanguages = ["Javascript", "Python", "C#", "Java", "Golang", "DB's", "SQL", "CSS", "HTML", "Shopify"]
const skills = [
    ["React", "Redux", "Router", "P5.js", "Firebase", "Three.js", "Recharts", "RESTFul Routing", "Passport.js", "Mocha", "Chai", "Jasmine", "Mongoose"],
    ["Pandas", "Matplotlib", "Numpy", "Keras", "Tensorflow", "Scikit learn"],
    ["ASP.NET / .NET CORE"],
    ["Android Development", "Multithreading"],
    ["Microservices", "REST API's", "Docker"],
    ["MongoDB", "Postgre SQL", "mySQL server"],
    [],
    [],
    [],
    []
]

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {
        color: "#69B0CD",
        background: "rgb(240, 231, 219)",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
        height: "600vw",
        width: "100vw",
        backgroundAttachment: "fixed"
    }
} else {
    image_styling = {

        color: "#69B0CD",
        background: "rgb(240, 231, 219)",
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

        // <Container fluid style={{width: "100vw", height: "200vh", ...image_styling
        // }}>
        <Container className={window.innerWidth < 920 ? "w-100" : "w-50"} style={{...image_styling}}>



            <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem"}} className="mx-3">
                About me
            </h1>

            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                I'm a full-stack software engineer who has just finished at Exeter University with First Class Honours.
            </p>

            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                    I love exploring and experimenting with new technology such as Machine Learning,
                   Search Methods, Data analysis and preprocessing, Animations and, of course, Modern Front-End or Back-End Frameworks.
            </p>

            <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem"}} className="mx-3">
                What have I been doing?
            </h1>

            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                I had spent much of the last three years (when I started programming) teaching myself both Front-End and Back-End development using <code> <AboutButtonComponent name="Javascript"/></code>.
                Doing this was perhaps the most exciting way to learn to code, as you always end up with a visual product..
            </p>

            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                I love exploring and experimenting with new technology such as Machine Learning,
                Search Methods, Data analysis and preprocessing, Animations and, of course, Modern Front-End or Back-End Frameworks.
            </p>

            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                Currently I am using <code><AboutButtonComponent name="React"/>,<AboutButtonComponent name="Node.js"/>,<AboutButtonComponent name="Express.js"/>
                ,<AboutButtonComponent name="MongoDB"/></code>(MERN) stack to develop web applications.
                I also have experience in using <code><AboutButtonComponent name="RESTful routing"/></code>
                in my node.js applications and a detailed understanding of <code><AboutButtonComponent name="Boostrap"/></code> and <code><AboutButtonComponent name="CSS Flexbox"/></code>.
                I have worked with animations libraries such as <code><AboutButtonComponent name="P5.js"/></code> to visualise specific projects, such as my A* Pathfinding algorithm.
                I have also worked with 3D graphics libraries such as <code><AboutButtonComponent name="Three.js"/></code> and Graphical libraries such as <code><AboutButtonComponent name="Recharts"/></code>.
                I can also code in <code><AboutButtonComponent name="Java"/></code>, <code><AboutButtonComponent name="Python"/></code>, <code><AboutButtonComponent name="Golang"/></code>
                and <code><AboutButtonComponent name="C#(ASP.NET)"/></code> to a competent level.
            </p>

            <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem"}} className="mx-3">
                University
            </h1>

            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                During University, I have developed an android app in Java using android studio. I created an interactive treasure trail web app that helps 1st-year students find their way around campus, wrote a K-Means-Clustering algorithm for classifying handwritten digits in python,
                created Microservice architecture in Golang and deployed it using docker. For data preprocessing, analysis and representations,
                I have extensively used <code><AboutButtonComponent name="Pandas"/></code>, <code><AboutButtonComponent name="Matplotlib"/></code>,
                <code><AboutButtonComponent name="Numpy"/></code> and <code><AboutButtonComponent name="Scikit Learn"/></code>.
            </p>

            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                For my final year project, I developed a Chess AI that combines machine learning with search methods similar to the world-renowned AlphaGo, developed back in 2015.
                I built this using <code> <AboutButtonComponent name="Tensorflow (GPU)"/></code>,<code><AboutButtonComponent name="Keras"/></code> and a fair bit of multiprocessing,
                and the objective was to compare the performance of traditional and new AI methods when applied to Chess.
                AlphaGo required extensive research into <code> <AboutButtonComponent name="Convolutional Neural Networks"/></code>,
                <code><AboutButtonComponent name="Supervised"/></code> and <code><AboutButtonComponent name="Reinforcement Learning"/></code>
                and search methods such as the <code><AboutButtonComponent name="Monte-Carlo tree search"/></code> and <code><AboutButtonComponent name="Minimax Search"/></code>.
            </p>
            <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem"}} className="mx-3">
                Skills (click on each for more info)
            </h1>
            <Card className="bg-transparent border-0">
                <Card.Text style={{
                    // backgroundColor: `rgb(41, 43, 41, 0.8)`
                }} className="rounded">
                    <Container fluid className="d-flex justify-content-center flex-wrap w-75 mb-5 pt-5">
                        {currentLanguages.map((currentLanguage, index) => (<LanguageComponent language={currentLanguage} skills={skills[index]}/>
                        ))}
                    </Container>
                </Card.Text>

            </Card>

            {/*<Card className={window.innerWidth > 700 ? "d-flex align-items-center justify-content-center text-start mx-auto w-100" :*/}
            {/*"d-flex align-items-center justify-content-center text-start w-100"} style={{*/}
            {/*    // backgroundColor: `rgb(255, 255, 255, 0.94)`,*/}
            {/*    // backgroundColor: "transparent",*/}
            {/*    // color: "#570861",*/}
            {/*    color: "white",*/}
            {/*    transform: 'translate(0%, 5%)',*/}
            {/*}}>*/}

            {/*    <Card.Title className="p-2">*/}

            {/*        <h1 className="m-2 h3 fw-bold fst-italic p-2 text-center text-white">*/}
            {/*            <TagComponent name="About me" fontSize="h1"/>*/}
            {/*        </h1>*/}

                    {/*<Row className="w-100 mx-auto">*/}
                        {/*<Card className="d-flex flex-row flex-wrap p-2">*/}
                        {/*    <p style={{*/}
                        {/*        backgroundImage: `url(${'https://media.giphy.com/media/RetcDrOQFZRR3e4R8z/giphy.gif'})`,*/}
                        {/*        backgroundColor: `rgb(255, 255, 255, 0.94)`,*/}
                        {/*        color: "#570861",*/}
                        {/*    }} className="w-75 mx-auto text-center p-2 rounded">*/}
                        {/*        I'm a full-stack software engineer who has just finished at Exeter University with First Class Honours.*/}
                        {/*    </p>*/}
                            {/*<Card.Img src={spaceImage}*/}
                            {/*          style={{backgroundSize: "contain", backgroundPosition: "center", width: "100%",*/}
                            {/*height: "auto", alignSelf: "flex-start"}}/>*/}
                        {/*    <Card.Text>*/}
                        {/*        <p className="lead p-2" style={{color: "white", backgroundColor: "#570861"}}>*/}
                        {/*            I love exploring and experimenting with new technology such as Machine Learning,*/}
                        {/*            Search Methods, Data analysis and preprocessing, Animations and, of course, Modern Front-End or Back-End Frameworks.*/}
                        {/*        </p>*/}
                        {/*    </Card.Text>*/}
                        {/*</Card>*/}
                    {/*</Row>*/}


                    {/*<Row style={{*/}
                    {/*    backgroundColor: `rgb(41, 43, 41, 0.8)`*/}
                    {/*}} className="mt-2 m-0 p-1">*/}

                    {/*    <p className="lead mt-3">*/}
                    {/*        I had spent much of the last three years (when I started programming) teaching myself both Front-End and Back-End development using <code> <AboutButtonComponent name="Javascript"/></code>.*/}
                    {/*        Doing this was perhaps the most exciting way to learn to code, as you always end up with a visual product.*/}
                    {/*    </p>*/}

                    {/*    <p className="lead">*/}
                    {/*        Currently I am using <code><AboutButtonComponent name="React"/>,<AboutButtonComponent name="Node.js"/>,<AboutButtonComponent name="Express.js"/>*/}
                    {/*        ,<AboutButtonComponent name="MongoDB"/></code>(MERN) stack to develop web applications.*/}
                    {/*        I also have experience in using <code><AboutButtonComponent name="RESTful routing"/></code>*/}
                    {/*        in my node.js applications and a detailed understanding of <code><AboutButtonComponent name="Boostrap"/></code> and <code><AboutButtonComponent name="CSS Flexbox"/></code>.*/}
                    {/*        I have worked with animations libraries such as <code><AboutButtonComponent name="P5.js"/></code> to visualise specific projects, such as my A* Pathfinding algorithm.*/}
                    {/*        I have also worked with 3D graphics libraries such as <code><AboutButtonComponent name="Three.js"/></code> and Graphical libraries such as <code><AboutButtonComponent name="Recharts"/></code>.*/}
                    {/*        I can also code in <code><AboutButtonComponent name="Java"/></code>, <code><AboutButtonComponent name="Python"/></code>, <code><AboutButtonComponent name="Golang"/></code>*/}
                    {/*        and <code><AboutButtonComponent name="C#(ASP.NET)"/></code> to a competent level.*/}
                    {/*    </p>*/}

                    {/*    <p className="lead">*/}
                    {/*        During University, I have developed an android app in Java using android studio. I created an interactive treasure trail web app that helps 1st-year students find their way around campus, wrote a K-Means-Clustering algorithm for classifying handwritten digits in python,*/}
                    {/*        created Microservice architecture in Golang and deployed it using docker. For data preprocessing, analysis and representations,*/}
                    {/*        I have extensively used <code><AboutButtonComponent name="Pandas"/></code>, <code><AboutButtonComponent name="Matplotlib"/></code>,*/}
                    {/*        <code><AboutButtonComponent name="Numpy"/></code> and <code><AboutButtonComponent name="Scikit Learn"/></code>.*/}
                    {/*    </p>*/}

                    {/*    <p className="lead">*/}
                    {/*        For my final year project, I developed a Chess AI that combines machine learning with search methods similar to the world-renowned AlphaGo, developed back in 2015.*/}
                    {/*        I built this using <code> <AboutButtonComponent name="Tensorflow (GPU)"/></code>,<code><AboutButtonComponent name="Keras"/></code> and a fair bit of multiprocessing,*/}
                    {/*        and the objective was to compare the performance of traditional and new AI methods when applied to Chess.*/}
                    {/*        AlphaGo required extensive research into <code> <AboutButtonComponent name="Convolutional Neural Networks"/></code>,*/}
                    {/*        <code><AboutButtonComponent name="Supervised"/></code> and <code><AboutButtonComponent name="Reinforcement Learning"/></code>*/}
                    {/*        and search methods such as the <code><AboutButtonComponent name="Monte-Carlo tree search"/></code> and <code><AboutButtonComponent name="Minimax Search"/></code>.*/}
                    {/*    </p>*/}
                    {/*</Row>*/}




            {/*        <p className="mt-5 h3 fw-bold fst-italic p-2 text-center text-white">*/}
            {/*            <TagComponent name="Skills - click to view more information" fontSize="h3"/>*/}
            {/*        </p>*/}


            {/*    </Card.Title>*/}
            {/*    <Card.Text style={{*/}
            {/*        // backgroundColor: `rgb(41, 43, 41, 0.8)`*/}
            {/*    }} className="rounded">*/}
            {/*        <Container fluid className="d-flex justify-content-center flex-wrap w-75 mb-5 pt-5">*/}
            {/*            {currentLanguages.map((currentLanguage, index) => (<LanguageComponent language={currentLanguage} skills={skills[index]}/>*/}
            {/*            ))}*/}
            {/*        </Container>*/}
            {/*    </Card.Text>*/}
            {/*</Card>*/}
        </Container>
    )

}