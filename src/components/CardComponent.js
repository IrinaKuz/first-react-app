import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import React, { Component } from 'react';

class MyCard extends Component {
    constructor(props) {
        super(props);
        this.dish = props.dish;
    }

    render() {
        return(
            <Card onClick={() => this.props.onDishSelect(this.dish)}>
                <CardImg width="100%" src={this.dish.image} alt={this.dish.name}/>
                <CardImgOverlay>
                    <CardTitle tag="h3">{this.dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        )  
    }
}

export default MyCard;