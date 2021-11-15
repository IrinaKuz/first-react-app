import React from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Card, 
    CardImg, 
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle } from 'reactstrap';

function RenderCard(props) {
    const item = props.item;
    return(
        <Card>
            <CardImg 
                alt={item.name}
                src={item.image}
            />
            <CardBody>
                <CardTitle tag="h3">
                    {item.name}
                    {item.designation ? <CardSubtitle tag="h5">{item.designation}</CardSubtitle> : null}
                    {item.abbr ? <CardSubtitle tag="h5">{item.abbr}</CardSubtitle> : null}
                </CardTitle>
                <CardText  className="p1">
                    {item.description}
                </CardText>
            </CardBody>
        </Card>
    )
}
function Home(props) {
    return(
        <Container>
            <Row className="align-items-start">
                <Col xs="12" md="" className="m-1">
                    <RenderCard item={props.dish} />
                </Col>
                <Col xs="12" md="" className="m-1">
                    <RenderCard item={props.promotion} />
                </Col>
                <Col xs="12" md="" className="m-1">
                    <RenderCard item={props.leader} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;