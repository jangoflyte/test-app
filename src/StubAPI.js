import React from 'react';

export default class StubAPI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        fetch('/cars')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                cars: data.cars
        })});
    }

    render() {
        return (
        <div id='cars'> 
            {this.state.cars.length ? 
                this.state.cars.map((car, index) => (
                    <div className='car' key={index}>
                        <h1>{car.manufacturer} {car.model}</h1>
                        <img src={car.image} alt={car.model} />
                    </div>
                )) : 'There are no cars to display'}
        </div>
        )
    }
}

