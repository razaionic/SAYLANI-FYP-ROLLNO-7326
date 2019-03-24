import React, { Component } from 'react';
import {Table} from 'reactstrap';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import Pusher from 'pusher-js'; 
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import {toast} from 'react-toastify';
import { orderMenuItem,getMenuItems } from '../actions/menuActions';
import _ from 'lodash';

class ItemTable extends Component {

    componentDidMount(prevProps){
        this.props.getItems();
        this.props.getMenuItems();
        const pusher = new Pusher('API_KEY', {
            cluster: 'CLUSTER',
            encrypted: true
          });
          const channel = pusher.subscribe('my-channel');
          channel.bind('my-event', data => {
            this.props.item.items = [...this.props.item.items,data.item];
            toast.warning("Item Added");  
            this.setState({ state: this.state });  
          });
          channel.bind('reload', data => {
            this.props.getMenuItems();
            this.props.item.items = this.props.item.items.filter(item => item._id !==data.item._id);
            toast.warning("Item Removed");
            this.setState({ state: this.state });
          });
    }

    onCreateItem = (name,quantity,created_till_now) => {
         return ({
             name:name,
                created_till_now:created_till_now,
                quantity:quantity
            })

    }

    onDeleteClick = (_id,name,quantity,created_till_now,e) => {
        this.props.orderMenuItem(_id,this.onCreateItem(name,quantity,created_till_now));
        // this.setState({ state: this.state });
    }
toFind = (items,menuitems) =>{
    var final_items =[];

    for(var item in items){
        final_items.push(_.assign(items[item],_.pick(_.find(menuitems,['name',items[item].name]),['created_till_now','predicted'])));
    }
    // console.log(final_items);
    return (final_items);
}

  render() {
    const {items} = this.props.item;
    const {menuitems} = this.props.menuitem;
    const final_items = this.toFind(items,menuitems);
    var i=1;
    return (
        <Container>
    {<Table>
    <thead>
        <tr> 
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Created Till Now</th>
            <th>Predicted</th>
            <th>Date</th>
            <th>Time</th><th>Done</th>
        </tr>
    </thead>
    <tbody>
    {final_items.map((
        {
            name,
            quantity,
            date,
            _id,
            created_till_now,
            predicted
        }) => (
        
        <tr key={_id}>
            <td>{i++}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{created_till_now}</td>
            <td>{predicted}</td>
            <td>{date.split('T')[0]}</td>
            <td>
                {date.split('T')[1].split('.')[0]}
            </td>
            <td>
            <TransitionGroup className="item-table">
            <CSSTransition key= {_id} timeout={500} classNames="fade">
                <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick ={(e) =>
                    this.onDeleteClick(_id,name,quantity,created_till_now,e)}
                >Done
                </Button>
            </CSSTransition>
        </TransitionGroup>
            </td>
        </tr>  
    )
    )}
    </tbody>
    </Table>}
      </Container>
    );
  }
}
ItemTable.propTypes = {
    getItems: PropTypes.func.isRequired,
    orderMenuItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    menuitem: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
    menuitem: state.menuitem
})
export default connect(mapStateToProps,
    { getItems, orderMenuItem,getMenuItems })(ItemTable);
