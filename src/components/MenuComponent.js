import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { 
    Button,
    Row,
    Col,
    Container,
    Card, 
    CardImg, 
    CardImgOverlay, 
    CardTitle, 
    Breadcrumb, 
    BreadcrumbItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    const MenuItem = (props) => {
        const dish = props.dish;
        return(
            <Card>
                <Link to={`menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle tag="h3">{dish.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        )  
    }

    function Menu(props) {
        const menu = props.dishes.dishes.map(i => {
                            return (
                                <div key={i.id} className="col-12 col-sm-6 col-md-3 p-1">
                                    <MenuItem dish={i} />
                                </div>
                            );
                        });
        
        const selectedDish = props.selectedDish ? props.selectedDish : null;
        if (props.dishes.isLoading) {
            return (
                <Container>
                    <Row>
                        <Loading />
                    </Row>
                </Container>
            )
        } else if (props.dishes.errMess) {
            return (
                <Container>
                    <Row>
                        <h4>{props.dishes.errMess}</h4>
                    </Row>
                </Container>
            )
        } else {
            return (
                <div className="container">
                    {/* Breadcrumbs */}
                    <Row>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Menu
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Col xs="12">
                            <h3>Menu</h3>
                            <hr />
                        </Col>
                    </Row>
                    <div className="row">
                            {menu}
                    </div>
                    <div className="row">
                    <Modal isOpen={props.isOpen} toggle={props.toggle}>
                        <ModalHeader toggle={props.toggle}>
                            {selectedDish === null ? '' : <img className="m-2" src={selectedDish.image} alt={selectedDish.name}/>}   
                            {selectedDish === null ? '' : selectedDish.name} 
                        </ModalHeader>
                        <ModalBody>
                            {selectedDish === null ? '' : selectedDish.description}
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={props.toggle}>
                            Do Something
                        </Button>
                        {' '}
                        <Button onClick={props.toggle}>
                            Cancel
                        </Button>
                        </ModalFooter>
                    </Modal>
                    </div>
                </div>
            );
        }
    }

export default Menu;