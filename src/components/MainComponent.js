import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component{
  constructor(props) {
    super(props);
    this.onDishSelect = this.onDishSelect.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
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
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">
                            Ristorante Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Menu 
                    selectedDish={this.state.selectedDish} 
                    dishes={this.state.dishes}
                    onDishSelect={this.onDishSelect}
                    isOpen={this.state.modal} 
                    toggle={() => this.toggle()}
                    />
            </div>
        );
    }
}

export default Main;
