import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardGroup } from 'reactstrap';
import { Media, List } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(i) {
        this.setState({
            selectedDish: i
        })
    }

    renderDish(dish) {
        if(dish !== null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle tag="h3">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes
                        .map(i => {
                            return (
                                <div key={i.id} className="col-12 col-sm-6 col-md-3 p-1">
                                    <Card onClick={() => this.onDishSelect(i)}>
                                        <CardImg width="100%" src={i.image} alt={i.name}/>
                                        <CardImgOverlay>
                                            <CardTitle tag="h3">{i.name}</CardTitle>
                                            
                                        </CardImgOverlay>
                                    </Card>
                                </div>
                            );
                        });
    
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;