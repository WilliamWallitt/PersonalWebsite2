import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import backgroundImage from "../../Assets/homePage2.jpg"
import mobileBackgroundImage from "../../Assets/mobileHomePage.png"
import ButtonComponent from "../Button/Buttons";
import {Link} from "react-router-dom";
import TagComponent from "../GithubPage/TagComponent";
import "./Title.scss"
import "./cloud.css"


// #183153 navy blue

const currentLanguages = ["Javascript", "Python", "C#", "Java", "Golang", "Databases", "SQL", "CSS", "HTML"]

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {
        // backgroundColor: "black",
        // backgroundImage: "url(" + mobileBackgroundImage + ")",
        color: "#69B0CD",
        background: "linear-gradient(to bottom, #87CEEB 0%, #78BFDC 100%)",
        backgroundPosition: "left, left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "110vh",
        width: "100vw",
        backgroundAttachment: "fixed"

    }
} else {
    image_styling = {

        // backgroundImage: "url(" + test + ")",
        //     // backgroundColor: "white",
        color: "#69B0CD",
        background: "linear-gradient(to bottom, #87CEEB 0%, #78BFDC 100%)",
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"

    }

}



export default function HomePageComponent() {


    return (


        <Container className="d-flex text-center align-items-center justify-content-center" fluid style={{width: "100vw", height: "90vh", ...image_styling}}>

            <div className="clouds">

                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" width="762px"
                     height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331"
                     className="cloud big front slowest">
<path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
</svg>
                <svg version="1.1"  version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" width="762px"
                     height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331"
                     className="cloud distant smaller">
<path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
</svg>

                <svg  version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" width="762px"
                     height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331"
                     className="cloud small slow">
<path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
</svg>

                <svg  version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" width="762px"
                     height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331"
                     className="cloud distant super-slow massive">
<path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
</svg>

                <svg  version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" width="762px"
                     height="331px" viewBox="0 0 762 331" enableBackground="new 0 0 762 331"
                     className="cloud slower">
<path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"/>
</svg>

            </div>


            {/* border border-dark border-5*/}
            <Card className={window.innerWidth > 600 ? "text-center w-75 shadow shadow-lg" : "text-center w-100 shadow shadow-lg" } style={{
                // backgroundColor: `rgb(255, 255, 255, 0.94)`,
                backgroundColor: "rgb(0, 0, 0, 0.25)",
                color: "#570861"
            }}>
                <Card.Title>

                    {/*<h1 className="p-5 h3 fw-bold fst-italic">HI, I'M WILL AND I'M A FULL-STACK WEB DEVELOPER &nbsp;*/}
                    {/*    <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="_" style={{width: "25px", height: "25px"}}/>*/}
                    {/*</h1>*/}

                    <h1 className="p-5 fw-bold fst-italic mt-5" data-heading="" id="lead">
                        <ButtonComponent name="HI, I'M WILL, AND I'M A FULL-STACK WEB DEVELOPER &nbsp;" backgroundColor="transparent">
                            <img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" className="" alt="_" style={{width: "25px", height: "25px"}}/>
                        </ButtonComponent>


                        {/*HI, I'M WILL, AND I'M A FULL-STACK WEB DEVELOPER &nbsp;*/}
                        {/*<img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt="_" style={{width: "25px", height: "25px"}}/>*/}
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