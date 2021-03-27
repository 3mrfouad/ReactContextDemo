import MyContext from './MyContext';
import React, {useState} from 'react';

const MyProvider = (props) =>  {
    const [products, SetProducts] = useState({
      cars: {
        car001: { name: "Honda", price: 100 },
        car002: { name: "BMW", price: 150 },
        car003: { name: "Mercedes", price: 200 },
      },
    });
        return (
            <MyContext.Provider
                value={{
                    cars: products.cars,
                    incrementPrice: selectedID => {
                        const cars = products.cars;
                        cars[selectedID].price = cars[selectedID].price + 1;
                        SetProducts({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = products.cars;
                        cars[selectedID].price = cars[selectedID].price - 1;
                        SetProducts({
                            cars
                        });
                    }
                }}
            >
                {props.children}
            </MyContext.Provider>
        );
    };

    export default MyProvider;