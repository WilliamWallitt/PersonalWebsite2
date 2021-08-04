import React from "react";
import {Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import TagComponent from "./TagComponent";
import backgroundImage from "../../Assets/HomePageTest.jpg";
import ButtonComponent from "../Button/Buttons";

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
                <Container fluid style={{width: "100vw", height: "400vh", backgroundColor: "white"
                }}>
                    <Container className="mx-auto" style={{transform: 'translate(0%, 5%)'}}>
                        <Card className="text-center mx-auto rounded-lg shadow-lg" style={{ width: '18rem', backgroundColor: "#eeff1f"}}>
                            <Card.Img variant="top" style={{height: "20vh", objectFit: "cover"}} src={this.state.data[0].owner.avatar_url}/>
                            <Card.Body>
                                <Card.Title className="fw-bold fst-italic" style={{color: "#570861"}}>

                                </Card.Title>
                                <Button variant="outline-none" href={this.state.data[0].owner.html_url}>
                                    <ButtonComponent name={this.state.data[0].owner.login}/>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Container>

                    <Container variant="flush" className={window.innerWidth > 650 ? "mx-auto shadow-lg my-5 w-75" : "mx-auto shadow-lg my-5 w-100" }>
                        {this.state.data.map((value, index) => (
                            <div key={index}  style={{backgroundColor: "#eeff1f"}} className="my-2 border border-dark border-5">

                                <Row className="my-3">
                                    <Col className="text-white">
                                        <TagComponent name={value.name} backgroundColor="black"/>
                                    </Col>
                                </Row>

                                {/*<Row className="text-start">*/}
                                <div className="d-flex justify-content-center">
                                    <div className="text-white">
                                        <TagComponent name={"Created at:"} backgroundColor="#570861"/>
                                    </div>
                                    <TagComponent name={value.created_at.slice(0, 10)}/>
                                </div>

                                {/*</Row>*/}
                                {/*<Row className="text-start">*/}
                                {/*    <Col className="text-white">*/}
                                {/*        <TagComponent name={"Created at:"} backgroundColor="#570861"/>*/}
                                {/*    </Col>*/}
                                {/*    <Col>*/}
                                {/*        <TagComponent name={value.created_at.slice(0, 10)}/>*/}
                                {/*    </Col>*/}
                                {/*</Row>*/}
                                {value.description !== null && <div
                                    className="d-flex justify-content-center">
                                    <div className="text-white">
                                        <TagComponent name={"Description:"} backgroundColor="#570861"/>
                                    </div>
                                    <TagComponent name={value.description}/>
                                </div>

                                }



                                {/*<Row className="text-start">*/}
                                {/*    <Col className="text-white">*/}
                                {/*        <TagComponent name={"Description:"} backgroundColor="#570861"/>*/}
                                {/*    </Col>*/}
                                {/*    <Col>*/}
                                {/*        <TagComponent name={value.description}/>*/}
                                {/*    </Col>*/}
                                {/*</Row>*/}

                                <div className="d-flex justify-content-center">
                                    <div className="text-white">
                                        <TagComponent name={"Coding languages:"} backgroundColor="#570861"/>
                                    </div>
                                    <TagComponent name={value.language}/>
                                </div>

                                {/*<Row className="text-start">*/}
                                {/*    <Col className="text-white">*/}
                                {/*        <TagComponent name={"Coding languages:"} backgroundColor="#570861"/>*/}
                                {/*    </Col>*/}
                                {/*    <Col>*/}
                                {/*        <TagComponent name={value.language}/>*/}
                                {/*    </Col>*/}
                                {/*</Row>*/}


                            </div>))}
                    </Container>
                </Container>


            )
        }

    }



}