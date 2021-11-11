import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from './CardComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.dishes = props.dishes;
    }

    
    render() {
        const menu = this.dishes.map(i => {
                            return (
                                <div key={i.id} className="col-12 col-sm-6 col-md-3 p-1">
                                    <MyCard dish={i} onDishSelect={this.props.onDishSelect}/>
                                </div>
                            );
                        });
        
        const selectedDish = this.props.selectedDish;
    
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>
                        {selectedDish === null ? '' : <img className="m-2" src={selectedDish.image} />}   
                        {selectedDish === null ? '' : selectedDish.name} 
                    </ModalHeader>
                    <ModalBody>
                        {selectedDish === null ? '' : selectedDish.description}
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>
                        Do Something
                    </Button>
                    {' '}
                    <Button onClick={this.props.toggle}>
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