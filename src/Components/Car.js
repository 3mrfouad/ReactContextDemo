import React,  { Fragment } from 'react';

const Car = props => {
    return(    
    <Fragment>
        <p>Name 123: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment>
    );
};

export default Car;