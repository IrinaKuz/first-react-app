import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Badge,
    Container
} from 'reactstrap';
import { COMMENTS } from '../shared/comments';
import { Link } from 'react-router-dom';

function RenderComments(props) {
    const comments = COMMENTS.filter((comment) => {
        return comment.dishId == props.dish.id;
    });
    const listComments = comments.map(item => {
        return (
            <ListGroupItem>
                <blockquote className="blockquote">
                    {item.comment}{' '}
                    <Badge color="primary" pill>rating: {item.rating}</Badge>
                </blockquote>
                <figcaption className="blockquote-footer">
                    <p className="text-muted">{item.author}</p>
                </figcaption>
            </ListGroupItem>
        );
    });
    return (
        <ListGroup type="unstyled">
            {listComments}
        </ListGroup>
    )
}

export default function RenderCard(props) {
    const item = props.item;
    return(
        <Container>
            {/* Breadcrumbs */}
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.item.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <Col xs="12">
                    <h3>{props.item.name}</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="3">
                    <CardImg 
                        alt={item.name}
                        src={item.image}
                    />
                </Col>
                <Col xs="12" sm="9">
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
                </Col>
                <Col xs="12">
                    <RenderComments dish={item} />
                </Col>
            </Row>
        </Container>
    )
}