import React from "react";
import {Link} from "react-router-dom";
import {Card, CardImg, Container, Row} from "react-bootstrap";
import TagComponent from "../GithubPage/TagComponent";

export default function Project(props) {

    return (


        <Card className="m-2">
            <Card.Title className="m-2 ">
                <h1 className="fst-italic">
                    <TagComponent name={props.data.name} fontSize="h3"/>
                </h1>
            </Card.Title>

            <Link to={props.data.linkTo}>
                {window.innerWidth < 600 ?

                    <CardImg
                        src={props.data.image}
                        style={{
                            width: '100%',
                            backgroundSize: "cover"
                        }}
                    /> :

                    <CardImg
                        src={props.data.image}
                        style={{
                            width: '100%',
                            // maxWidth: "100%",
                            height: '50vh',
                            backgroundSize: "cover",
                            objectFit: "contain"
                        }}
                    />
                }
            </Link>

            <Card.Text>
                <Row>
                    <p className="lead bg-dark text-white p-2 m-2">{props.data.description}</p>
                </Row>
                <Row>
                    <h1 className="fst-italic lead">
                        <TagComponent name="Coding languages / techniques used" fontSize="h6" backgroundColor="#570861"/>
                    </h1>
                    <Container fluid className="d-flex justify-content-center flex-wrap w-100 mb-5 p-2">
                        {props.data.tags.map(tag => (
                            <div style={{
                                backgroundColor: "#eeff1f",
                                color: "#570861"
                            }}>
                                <TagComponent name={tag} fontSize="h6"/>
                            </div>
                        ))}
                    </Container>
                </Row>
                <Row style={{backgroundColor: "#570861"}}>
                    <h1>.</h1>
                </Row>

            </Card.Text>
        </Card>


    )


}