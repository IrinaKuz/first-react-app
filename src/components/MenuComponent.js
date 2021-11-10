import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from './CardComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.onDishSelect = this.onDishSelect.bind(this);

        this.state = {
            selectedDish: null,
            initialModalState: false,
            modal: false,
            fade: true,
        }
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish,
            modal: true
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
            fade: !this.state.fade
        })
    }

    
    render() {
        const menu = this.props.dishes
                        .map(i => {
                            return (
                                <div key={i.id} className="col-12 col-sm-6 col-md-3 p-1">
                                    <MyCard dish={i} onDishSelect={this.onDishSelect}/>
                                </div>
                            );
                        });
    
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
                    <ModalHeader toggle={() => this.toggle()}>
                        {this.state.selectedDish === null ? '' : <img className="m-2" src={this.state.selectedDish.image} />}   
                        {this.state.selectedDish === null ? '' : this.state.selectedDish.name} 
                    </ModalHeader>
                    <ModalBody>
                        {this.state.selectedDish === null ? '': this.state.selectedDish.description}
                    </ModalBody>
                    <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => this.toggle()}
                    >
                        Do Something
                    </Button>
                    {' '}
                    <Button onClick={() => this.toggle()}>
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