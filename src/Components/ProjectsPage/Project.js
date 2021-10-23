import React from "react";
import {Link} from "react-router-dom";
import {Card, CardImg, Container, Image, Row} from "react-bootstrap";
import TagComponent from "../GithubPage/TagComponent";
import "../Button/square.css"


export default function Project(props) {

    return (


        <Card className={window.innerWidth < 600  ? "m-2 bg-transparent border-0 w-100 mx-auto" : "m-2 bg-transparent border-0 w-50 mx-auto"}>
            <Card.Title className="m-2 ">

                <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem"}} className="mx-3 text-center p-2">
                    {props.data.name}
                </h1>
            </Card.Title>

            <Link to={props.data.linkTo}>
                {window.innerWidth < 600 ?

                    <Image
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
                            // height: '50vh',
                            backgroundSize: "cover",
                            objectFit: "contain"
                        }}
                    />
                }
            </Link>

            <Card.Text>
                <Row>
                    <p style={{fontWeight: "lighter", fontSize: "1rem", textAlign: "start"}} className="mx-3 my-2">
                        {props.data.description}
                    </p>
                </Row>
                <Row>

                    <h1 style={{fontWeight: "bold", textAlign: "start", fontSize: "1.66rem"}} className="mx-3 text-center p-2">
                        Coding languages / techniques used
                    </h1>
                    <Container fluid className="d-flex justify-content-center flex-wrap w-100 mb-5 p-2">
                        {props.data.tags.map(tag => (
                            <div style={{
                                // backgroundColor: "#eeff1f",
                                // color: "#570861"
                            }}>
                                <p style={{fontWeight: "lighter", textAlign: "center", fontSize: "0.8rem", backgroundColor: "#c6f6d5"}}
                                   className="mx-3 my-2 p-1 square">
                                    {tag}
                                </p>
                            </div>
                        ))}
                    </Container>
                </Row>
            </Card.Text>
        </Card>


    )


}