import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Home from './HomeComponent';
import {
    BrowserRouter as Router,
    Switch, 
    Route
  } from "react-router-dom";
import { Container } from 'reactstrap';

class Main extends Component{
  constructor(props) {
    super(props);
    this.onDishSelect = this.onDishSelect.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      // states for modal
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

    // toggling state of the model
    toggle() {
        this.setState({
            modal: !this.state.modal,
            fade: !this.state.fade
        })
    }

    render() {
        console.log('HomePage!')
        const HomePage = () => {
            return(
                <Container>
                    <Home 
                        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                        promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                    />
                </Container>
            )
        }
        return (
                    <div>
                    <Header />
                    <Switch>
                        <Route exact path="/menu" component={
                            () => <Menu dishes={this.state.dishes} 
                                        onDishSelect={this.onDishSelect}
                                        isOpen={this.state.modal}
                                        toggle={() => this.toggle()}
                            /> 
                        } />
                        <Route exact path="/contactus" component={Contact} />
                        <Route component={HomePage} />
                    </Switch>
                    {/* <Menu 
                        selectedDish={this.state.selectedDish} 
                        dishes={this.state.dishes}
                        onDishSelect={this.onDishSelect}
                        isOpen={this.state.modal} 
                        toggle={() => this.toggle()}
                    /> */}
                    <Footer />
                    </div> 
        );
    }
}


export default Main;
