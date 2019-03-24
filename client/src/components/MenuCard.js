import React,{Component} from 'react';
import { Card, CardBody,Input,
  CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';
  import { connect } from 'react-redux';
import Pusher from 'pusher-js'; 
import { addItem } from '../actions/itemActions';
import { getMenuItems } from '../actions/menuActions';

  import PropTypes from 'prop-types';


class MenuCard extends Component {
  componentDidMount(){
    this.props.getMenuItems();
    const pusher = new Pusher('API_KEY', {
      cluster: 'CLUSTER',
      encrypted: true
    });
    const channel = pusher.subscribe('my-channel');
    channel.bind('mainPage', data => {
      this.props.menuitem.menuitems = [...this.props.menuitem.menuitems,data.newItem];
     this.setState({state:this.state});   
    });
}

onChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

onOrder = (name,created_till_now,predicted,e)=> {
  const newItem = {
      name: name,
      quantity: Number(this.state.quantity),
      created_till_now:created_till_now,
      predicted:predicted
  }
  this.props.addItem(newItem);

}
  render(){
    const {menuitems} = this.props.menuitem;
    return (
      <ListGroup>
        {menuitems.map(({ _id, name,created_till_now,predicted,price}) => (
             <ListGroupItem>
                 <Card sm="6">
          <CardBody>
            <CardTitle>{name.toUpperCase()} </CardTitle>
          <CardSubtitle>$ {price} </CardSubtitle>
            <Input
              type="number"
              name="quantity"
              id="quantity"
              placeHolder="How many such Items"
              onChange={this.onChange}
              />

<Button color="success" onClick={(e) => this.onOrder(name,created_till_now,predicted,e)}>Order</Button>

          </CardBody>
        </Card>
             </ListGroupItem>
         )
         )
         }
        </ListGroup>
    );
  }
}

MenuCard.propTypes = {
  getMenuItems: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  menuitem: PropTypes.object.isRequired 
}

const mapStateToProps = (state) => ({
  menuitem: state.menuitem
})


export default connect(mapStateToProps,
  { getMenuItems,addItem })(MenuCard);