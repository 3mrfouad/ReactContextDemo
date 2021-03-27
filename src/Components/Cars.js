import React,  { Fragment, useContext } from 'react';
import MyContext from '../Context/MyContext.js';
import Car from './Car';

const Cars = () => {

  const context = useContext(MyContext);
  console.log(context);
    return (
       
          <Fragment>
            <h4>Cars:</h4>
            {Object.keys(context.cars).map((carID) => (
              <Car
                key={carID}
                name={context.cars[carID].name}
                price={context.cars[carID].price}
                incrementPrice={() => context.incrementPrice(carID)}
                decrementPrice={() => context.decrementPrice(carID)}
              />
            ))}
          </Fragment>
        

    );
};

export default Cars;