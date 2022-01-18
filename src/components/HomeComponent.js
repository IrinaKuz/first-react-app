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
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard(props) {
    if(props.isLoading) {
        return(
            <Loading />
        )
    } else if (props.dishesErrMess) {
        return(
            <h4>{props.dishesErrMess}</h4>
        )
    } else {
        return(
            <Card>
                <CardImg 
                    alt={props.item.name}
                    src={baseUrl + props.item.image}
                />
                <CardBody>
                    <CardTitle tag="h3">
                        {props.item.name}
                        {props.item.designation ? <CardSubtitle tag="span">, {props.item.designation}</CardSubtitle> : null}
                        {props.item.abbr ? <CardSubtitle tag="span">, {props.item.abbr}</CardSubtitle> : null}
                    </CardTitle>
                    <CardText  className="p1">
                        {props.item.description}
                    </CardText>
                </CardBody>
            </Card>
        )
    }
 
}
function Home(props) {
    return(
        <Container>
            <Row className="align-items-start">
                <Col xs="12" md="" className="m-1">
                    <RenderCard 
                        item={props.item} 
                        isLoading={props.dishesLoading} 
                        errMess={props.dishesErrMess} />
                </Col>
                <Col xs="12" md="" className="m-1">
                    <RenderCard 
                        item={props.promotion} 
                        isLoading={props.promosLoading} 
                        errMess={props.promoErrMess} />
                </Col>
                <Col xs="12" md="" className="m-1">
                    <RenderCard item={props.leader} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;