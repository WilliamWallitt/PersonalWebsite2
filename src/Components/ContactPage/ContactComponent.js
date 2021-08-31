import React from "react";
import {Container, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TagComponent from "../GithubPage/TagComponent";
import ButtonComponent from "../Button/Buttons";
import "../HomePage/cloud.css"

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {
        color: "#69B0CD",
        background: "linear-gradient(to bottom, #87CEEB 0%, #78BFDC 100%)",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        backgroundAttachment: "fixed"

    }
} else {
    image_styling = {

        color: "#69B0CD",
        background: "linear-gradient(to bottom, #87CEEB 0%, #78BFDC 100%)",
        // backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"

    }

}


export default function ContactComponent() {

    const [userData, updateUserData] = React.useState({
        name: "",
        email: "",
        number: "",
        message: ""
    })

    const [componentToShow, updateComponentToShow] = React.useState(0)


    function updateFieldHandler(key, event) {
        let currentUserData = userData
        currentUserData[key] = event.target.value
        updateUserData(currentUserData)
    }

    async function onSubmit() {
        // submit details to /contact/
        let data = await fetch("/api/contact", {
            method: "POST",
            mode: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).then(data => data)
        console.log(data)
    }

    function showComponent() {
        if (componentToShow === 0) {
            return renderNameAndEmailHandler()
        } else {
            return renderNumberAndMessageHandler()
        }
    }


    function renderNameAndEmailHandler() {
        return (
            <Row className={window.innerWidth > 600 ?
                "rounded rounded-circle border border-dark shadow-lg p-5 mx-auto d-flex flex-row w-50" :
                "rounded rounded-circle border border-dark shadow-lg p-5 mx-auto d-flex flex-row"
            }
                 style={{backgroundColor: "rgb(0,0,0,0.7)"}}>                <Form.Group className="mb-3" controlId="name">
                    <Form.Label><TagComponent name="Name" backgroundColor="white"/></Form.Label>
                    <Form.Control key={"name"} type="text" placeholder={userData.name === "" ? "John Smith" : userData.name} onChange={updateFieldHandler.bind(this, "name")}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label><TagComponent name="Email address" backgroundColor="white"/></Form.Label>
                    <Form.Control key={"email"} type="email" placeholder={userData.email === "" ? "user@gmail.com" : userData.email} onChange={updateFieldHandler.bind(this, "email")}/>
                </Form.Group>

                <Form.Group>
                    <div onClick={() => updateComponentToShow(1)}>
                        <ButtonComponent name="next"/>
                    </div>
                </Form.Group>


            </Row>

        )
    }

    function renderNumberAndMessageHandler() {
        return (
            <Row className={window.innerWidth > 600 ?
                "rounded rounded-circle border border-dark shadow-lg p-5 mx-auto d-flex flex-row w-50" :
                "rounded rounded-circle border border-dark shadow-lg p-5 mx-auto d-flex flex-row"
            }
                 style={{backgroundColor: "rgb(0,0,0,0.7)"}}>
                <Form.Group className="mb-3" controlId="number">
                    <Form.Label><TagComponent name="Contact number" backgroundColor="white"/></Form.Label>
                    <Form.Control key={"number"} type="text" onChange={updateFieldHandler.bind(this, "number")}
                                  placeholder={userData.number === "" ? "07713190023" : userData.number} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">

                    <Form.Label><TagComponent name="Message" backgroundColor="white"/></Form.Label>
                    <Form.Control as="textarea" key={"message"} rows={3} onChange={updateFieldHandler.bind(this, "message")}
                                  placeholder={userData.message === "" ? "Please enter a message here" : userData.message}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="buttons">

                     <div className="d-flex flex-row justify-content-center">
                        <div onClick={() => updateComponentToShow(0)}>
                            <ButtonComponent name="previous"/>
                        </div>
                         <div onClick={onSubmit}>
                             <ButtonComponent name="submit"/>
                         </div>
                     </div>

                </Form.Group>



            </Row>
        )
    }


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

            <Form className="bg-transparent">

                {showComponent()}

            </Form>
        </Container>

    )


}