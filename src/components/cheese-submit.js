import React from 'react';
import {connect} from 'react-redux';
import { postCheese, addCheese, fetchCheesesError } from '../actions/cheese';

export class CheeseSubmit extends React.Component{
  checkCheese(e){
    e.preventDefault();
    if(!this.props.cheeseToAdd || this.props.cheeseToAdd.trim()===''){
      let err = new Error('cheese cannot be empty');
      this.props.dispatch(fetchCheesesError(err))
    }else {
      this.props.dispatch(postCheese(this.props.cheeseToAdd))
    }
  };

  render(){
    return (
      <form onSubmit={(e) => this.checkCheese(e)}>
        <label htmlFor='add-cheese'>Add a New Cheese!</label>
        <input type='text' name='add-cheese' id='add-cheese'
          onChange={(e) => this.props.dispatch(addCheese(e.target.value))}
          value={this.props.cheeseToAdd}/>
      </form>
    )
  }
}

const mapStateToProps=(state) => ({
  cheeseToAdd: state.cheeseToAdd
});

export default connect(mapStateToProps)(CheeseSubmit);