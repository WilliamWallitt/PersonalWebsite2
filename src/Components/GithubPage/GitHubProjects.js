import React from "react";
import {Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import TagComponent from "./TagComponent";
import backgroundImage from "../../Assets/homePage2.jpg"
import ButtonComponent from "../Button/Buttons";
import mobileBackgroundImage from "../../Assets/mobileHomePage.png";

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {

        // backgroundColor: "black",
        color: "#69B0CD",
        background: "rgb(240, 231, 219)",
        height: "auto",
        width: "100vw",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"

    }
} else {

        image_styling = {

            // backgroundImage: "url(" + backgroundImage + ")",
            color: "#69B0CD",
            background: "rgb(240, 231, 219)",
            // backgroundColor: "white",
            height: "auto",
            width: "100vw",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
    }

}

export default class GitHubProjects extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    async componentDidMount() {

        if (this.state.data !== null) {

        }

        if (this.state.data === null) {


            try {

                const response = await fetch(this.props.req)
                const json = await response.json()

                // lets sort by id
                json.sort(function(a, b){
                    return b.id - a.id;
                });

                this.setState({
                    data: json
                })

            } catch (e) {
                throw e;
            }

        }


    }

    render() {

        if (this.state.data === null) {
            return (
                <Container className="mt-5 text-center">
                    <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" alt="gif" style={{width: "80vw"}}/>
                </Container>
            )
        } else {
            return(

                // <Container fluid style={{width: "100%", height: "100%", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover",
                //     backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"
                // }}>


                <Container fluid style={{width: "100vw", ...image_styling
                }}>
                    <Container className="mx-auto" style={{transform: 'translate(0%, 5%)'}}>
                        {/*<Card className="text-center mx-auto rounded-lg shadow-lg" style={{ width: '18rem', backgroundColor: "#eeff1f"}}>*/}
                        <Card className="text-center mx-auto rounded-lg shadow-lg bg-transparent" style={{ width: '18rem'}}>

                        <Card.Img variant="top" style={{height: "16vh", objectFit: "cover"}} src={this.state.data[0].owner.avatar_url}/>
                            <Card.Body>
                                <Button variant="outline-none text-white" href={this.state.data[0].owner.html_url}>
                                    <ButtonComponent name={this.state.data[0].owner.login} backgroundColor="white"/>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Container>

                    <Container variant="flush" className={window.innerWidth > 650 ? "mx-auto my-5 w-100" : "mx-auto my-5 w-100" }>
                        <Col>
                            {this.state.data.map((value, index) => (
                                <Row key={index} className="my-2 py-2 w-100 rounded col-4 mx-auto">

                                    <Row className="my-3">
                                        <Col className="text-white">
                                            <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem"}} className="mx-3">
                                                {value.name}
                                            </h1>

                                            {/*<TagComponent name={value.name} backgroundColor="white"/>*/}
                                        </Col>
                                    </Row>

                                    {/*<Row className="text-start">*/}
                                    <Row className="mx-2">
                                        <Col className="text-white">
                                            <p style={{fontWeight: "bolder", fontSize: "1rem", textAlign: "start", backgroundColor: "#c6f6d5"}} className="mx-3 my-2 p-1">
                                                Created at:
                                            </p>

                                            {/*<TagComponent name="Created at: &#10140;" backgroundColor="#87CEEB"/>*/}
                                        </Col>
                                        <Col>
                                            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start", backgroundColor: "white"}} className="mx-3 my-2">
                                                {value.created_at.slice(0, 10)}
                                            </p>
                                            {/*<TagComponent name={value.created_at.slice(0, 10)} backgroundColor="#eeff1f"/>*/}

                                        </Col>
                                    </Row>

                                    {value.description !== null && <Row className="mx-2">
                                        <Col className="text-white">
                                            <p style={{fontWeight: "bolder", fontSize: "1rem", textAlign: "start", backgroundColor: "#c6f6d5"}} className="mx-3 my-2 p-1">
                                                Description:
                                            </p>
                                            {/*<TagComponent name="Description &#10140;" backgroundColor="#87CEEB"/>*/}
                                        </Col>
                                        <Col>
                                            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                                                {value.description}
                                            </p>
                                            {/*<TagComponent name={value.description} backgroundColor="#eeff1f"/>*/}
                                        </Col>
                                    </Row>

                                    }


                                    <Row className="mx-2">
                                        <Col className="text-white">
                                            <p style={{fontWeight: "bolder", fontSize: "1rem", textAlign: "start", backgroundColor: "#c6f6d5"}} className="mx-3 my-2 p-1">
                                                Coding languages:
                                            </p>
                                            {/*<TagComponent name="Coding languages &#10140;" backgroundColor="#87CEEB"/>*/}
                                        </Col>
                                        <Col>
                                            <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                                                {value.language}
                                            </p>
                                            {/*<TagComponent name={value.language} backgroundColor="#eeff1f"/>*/}
                                        </Col>
                                    </Row>

                                </Row>))}
                        </Col>

                    </Container>
                </Container>


            )
        }

    }



}