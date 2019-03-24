import React, {Component} from 'react';
import { Container,Table, Button, Input} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getMenuItems } from '../actions/menuActions';
import { predictItem } from '../actions/menuActions';
import PropTypes from 'prop-types';
class ShoppingList extends Component {

    componentDidMount(){
        this.props.getMenuItems();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.getMenuItems();
      }

      onCreateItem = (name) => {
        return ({
            name:name,
            predicted:this.state.predicted,
           })

   }

   onDeleteClick = (_id,name,e) => {
       this.props.predictItem(_id,this.onCreateItem(name));
       console.log(this.onCreateItem(name));
        this.props.getMenuItems();
    }
render(){
const {menuitems} = this.props.menuitem;
return (
<Container>
        <Table>
        <thead>
           <tr> 
              <th>Name</th>
              <th>Predicted</th>
              <th>new predict</th>
              <th>Update</th>
           </tr>
        </thead>
        <tbody>
        {menuitems.map((
            {
                name,
                _id,
                predicted
            }) => (
           
           <tr key={_id}>
             <td>{name}</td>
             <td>{predicted}</td>
             <td>
             <Input
              type="number"
              name="predicted"
              id="predicted"
              onChange={this.onChange}
              />
             </td>
             <td>
             <TransitionGroup className="item-table">
             <CSSTransition key= {_id} timeout={500} classNames="fade">
             <Button
        className="remove-btn-1"
        color="success"
        size="sm"
        onClick={(e)=>this.onDeleteClick(_id,name)}
        >Update
        </Button>
             </CSSTransition>
         </TransitionGroup>
             </td>
           </tr>  
        )
        )}
        <tr>
            </tr>
            </tbody>
      </Table>
      <a href="/api/menu/report">Get Report</a>
      </Container>
);
}
};

ShoppingList.propTypes = {
    getMenuItems: PropTypes.func.isRequired,
    predictItem: PropTypes.func.isRequired,
    menuitem: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    menuitem: state.menuitem
})
export default connect(mapStateToProps,
    { getMenuItems,predictItem })(ShoppingList);
