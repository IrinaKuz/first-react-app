import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';


    const MenuItem = (props) => {
        const dish = props.dish;
        return(
            <Card onClick={() => this.props.onDishSelect(this.dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle tag="h3">{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        )  
    }

    function Menu(props) {
        const menu = props.dishes.map(i => {
                            return (
                                <div key={i.id} className="col-12 col-sm-6 col-md-3 p-1">
                                    <MenuItem dish={i} onDishSelect={this.props.onDishSelect}/>
                                </div>
                            );
                        });
        
        const selectedDish = props.selectedDish;

        return (
            <div className="container">
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

export default Menu;