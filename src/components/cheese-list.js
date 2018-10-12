import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

export class CheeseList extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }
  
  render(){
    return (
    <ul>
      {this.props.cheeses}
    </ul>
    )
  }
}

const mapStateToProps = state => {
  const cheeseList = state.cheeses.map((cheese, index) => {
    return (<li key={index}>{cheese}</li>)
  });
  return {
    cheeses: cheeseList
  };
};

export default connect(mapStateToProps)(CheeseList);