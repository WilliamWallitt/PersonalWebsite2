import React from "react";
import {Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import TagComponent from "./TagComponent";
import backgroundImage from "../../Assets/homePage2.jpg"
import ButtonComponent from "../Button/Buttons";
import mobileBackgroundImage from "../../Assets/mobileHomePage.png";

let image_styling = null

if( /Android|webOS|iPhone|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    image_styling = {

        backgroundColor: "black",
        height: "auto",
        width: "100vw",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"

    }
} else {

        image_styling = {

            backgroundImage: "url(" + backgroundImage + ")",
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
                console.log(e)
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
                        <Card className="text-center mx-auto rounded-lg shadow-lg bg-dark" style={{ width: '18rem'}}>

                        <Card.Img variant="top" style={{height: "20vh", objectFit: "cover"}} src={this.state.data[0].owner.avatar_url}/>
                            <Card.Body>

                                <Button variant="outline-none text-white" href={this.state.data[0].owner.html_url}>
                                    <ButtonComponent name={this.state.data[0].owner.login} backgroundColor="white"/>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Container>

                    <Container variant="flush" className={window.innerWidth > 650 ? "mx-auto my-5 w-75" : "mx-auto my-5 w-100" }>
                        {this.state.data.map((value, index) => (
                            <div key={index}  style={{backgroundColor: "transparent"}} className="my-2">

                                <Row className="my-3">
                                    <Col className="text-white">
                                        <TagComponent name={value.name} backgroundColor="#292b2c"/>
                                    </Col>
                                </Row>

                                {/*<Row className="text-start">*/}
                                <div className="d-flex justify-content-center">
                                    <div className="text-white">
                                        <TagComponent name="Created at: &#10140;" backgroundColor="#570861"/>
                                    </div>
                                    <TagComponent name={value.created_at.slice(0, 10)} backgroundColor="#eeff1f"/>
                                </div>

                                {value.description !== null && <div
                                    className="d-flex justify-content-center">
                                    <div className="text-white">
                                        <TagComponent name="Description &#10140;" backgroundColor="#570861"/>
                                    </div>
                                    <TagComponent name={value.description} backgroundColor="#eeff1f"/>
                                </div>

                                }


                                <div className="d-flex justify-content-center">
                                    <div className="text-white">
                                        <TagComponent name="Coding languages &#10140;" backgroundColor="#570861"/>
                                    </div>
                                    <TagComponent name={value.language} backgroundColor="#eeff1f"/>
                                </div>

                            </div>))}
                    </Container>
                </Container>


            )
        }

    }



}