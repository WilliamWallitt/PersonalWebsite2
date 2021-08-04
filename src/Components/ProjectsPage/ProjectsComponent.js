import React from "react";
import backgroundImage from "../../Assets/homePage2.jpg"
import {Carousel, Container, Row} from "react-bootstrap";
import Project from "./Project";
import floorPlanner from "../../Assets/floorplan.PNG"
import website from "../../Assets/StCezaire.PNG"
import graphDrawer from "../../Assets/ALPHAJSONCHARTS.PNG"
import gameOfLife from "../../Assets/gameOfLife.PNG"
import astarproject from "../../Assets/ASTAR.PNG"
import yelpCampProject from "../../Assets/YelpCamp.png"
import musicProject from "../../Assets/PATAPAPCLONE.png"


const image_styling = {

    backgroundImage: "url(" + backgroundImage + ")",
    // backgroundColor: "white",
    height: "200vh",
    width: "100vw",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"

}


const projects = [

    {
        name: "2D/3D Floorplan building tool",
        description: "Allowed client to build custom 2D floor plans of the house, " +
            "shows the entire house in 3D along with required tasks for each room.",
        image: floorPlanner,
        tags: ["Javascript", "React", "Router", "Redux", "Hooks", "Three.js", "Boostrap", "Node.js", "Express.js", "Mongoose", "MongoDB"]
    },

    {
        name: "Rental website",
        description: "Showed information about house, how to get there " +
            "and available activities. Implemented a booking system that notified client about potential renters",
        image: website,
        linkTo: "/projects/stcezair",
        tags: ["Javascript", "React", "Router", "Boostrap", "Node.js", "Express.js", "Mongoose", "MongoDB"]
    },

    {
        name: "JSON data graph visualiser",
        description: "Preprocessed JSON datasets to create bar/line/scatter graphs of any combination of JSON attributes, " +
            "required features such as Domain Clipping and importing JSON files were added.",
        image: graphDrawer,
        tags: ["Javascript", "React", "Router", "Recharts", "Boostrap", "C# (ASP.NET)", "Postgre SQL"]
    },

    {
        name: "A* pathfinding algorithm (solver and visualiser)",
        description: "Informed and Uninformed search methods are an extremely important topic to understand, so I built a visualiser for one of the most used informed search algorithms",
        image: astarproject,
        linkTo: "/projects/astar",
        tags: ["Javascript", "React", "p5.js", "Boostrap"]
    },

    {
        name: "First website - YelpCamp",
        description: "Combining all concepts I learnt on my full stack web developer online course to create a campground website users can login, post comments and add new campgrounds on.",
        image: yelpCampProject,
        tags: ["HTML", "CSS", "Javascript", "Node.js", "Express.js", "Mongoose", "MongoDB", "Passport.js"]
    },

    {
        name: "Conways game of life",
        description: "To further understand cellular automata, I developed a simple visualisation of Conways game of Life - will be used for the Nature Inspired Computation module next year as an example of cellular automata.",
        image: gameOfLife,
        tags: ["Javascript", "p5.js"]
    },


    {
        name: "Music player and visualiser",
        description: "A simple music player that plays different sounds depending on the key pressed and creates different shapes to visualise each sound.",
        image: musicProject,
        linkTo: "/projects/clone",
        tags: ["Javascript", "p5.js", "howler.js", "HTML", "CSS"]
    }



]


export default function ProjectsComponent() {

    return (
        // <Container fluid style={{width: "100%", height: "1000px", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover",
        //     backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"
        // }}>
        <Container fluid style={{width: "100vw", height: "200vh", backgroundColor: "white", ...image_styling
        }}>

            <Container fluid style={{backgroundColor: "#eeff1f",
                color: "#183153", transform: 'translate(0%, 5%)', width: "90vw"}}
                       className="mx-auto">

                <Row>
                    <h1 className="h3 fw-bold fst-italic p-2 text-center">Projects</h1>
                </Row>
                <Row>

                    <Carousel className="shadow-lg" style={{backgroundColor: "#183153"}}>
                        {projects.map(project => (
                            <Carousel.Item>
                                <Project data={project}/>
                            </Carousel.Item>
                        ))}

                    </Carousel>

                </Row>

            </Container>


        </Container>
    )


}