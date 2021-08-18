import React from "react";
import backgroundImage from "../../Assets/homePage2.jpg";
import {Container, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import TagComponent from "../GithubPage/TagComponent";
import ButtonComponent from "../Button/Buttons";
import Col from "react-bootstrap/Col";
import mobileBackgroundImage from "../../Assets/mobileHomePage.png";

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {
        backgroundImage: "url(" + mobileBackgroundImage + ")",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat",
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
            <Form className="bg-transparent">

                {showComponent()}

            </Form>
        </Container>

    )


}