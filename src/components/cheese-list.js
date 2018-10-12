import React from 'react';

export function CheeseList(props){
  const cheeses = props.cheeses.map(cheese => {
    return (
      <li>{cheese}</li>
    );
  })

  return (
    <ul>
      {cheeses}
    </ul>
  )
}