import React, { Component } from 'react';
import {
    Button,
    Breadcrumb,
    BreadcrumbItem,
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
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { COMMENTS } from '../shared/comments';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderComments(props) {
    const comments = COMMENTS.filter((comment) => {
        return comment.dishId == props.dish.id;
    });
    const listComments = comments.map(item => {
        return (
            <ListGroupItem key={item.id}>
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

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class RenderCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitModal = this.handleSubmitModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmitModal(values) {
        alert('Current state is: ' + JSON.stringify(values));
    }
    render () {
        let item = this.props.item;
        return(
            <Container>
                {/* Breadcrumbs */}
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {item.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Col xs="12">
                        <h3>{item.name}</h3>
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
                        <Button onClick={this.toggleModal}>Submit Comment</Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Your Comment</ModalHeader> 
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmitModal(values)}>
                            <Row className='form-group'>
                                    <Col>
                                        <Label for="rating">Rating</Label>
                                        <Control.select model=".rating" 
                                                        name="rating"
                                                        className='form-control'
                                        >
                                                <option>Please, choose rating</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label for="username">Username</Label>
                                    <Control.text model=".username"
                                        id="username"
                                        name="username"
                                        className='form-control'
                                        placeholder="Your username"
                                        validators={{
                                            required, 
                                            minLength: minLength(3), 
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            
                            <Row  className='form-group'>
                                <Col>
                                    <Label for="message">
                                        Message
                                    </Label> 
                                    <Control.textarea model=".message"
                                        id="message"
                                        name="message"
                                        className='form-control'
                                        placeholder="Your comment"
                                        rows="5"
                                    />     
                                </Col>
                            </Row>
                            <Button 
                                type="submit" 
                                value="submit" 
                                color="primary"
                            >Submit Comment</Button>
                        </LocalForm>
                    </ModalBody> 
                </Modal>
            </Container>
        )
    }       
}

export default RenderCard;