import React from 'react';

export default class StubAPI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            details: {},
            showDetails: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch('/cars')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                cars: data.cars
        })});
    }

    handleClick() {
        fetch('/details')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                details: data.details,
                showDetails: !this.state.showDetails
        });
    })};

    render() {
        return this.state.showDetails ? (
          <div className="details">
            <div>{this.state.details.horsepower} BHP</div>
            <div>0-60: {this.state.details.timeTo60} seconds</div>
            <div>Price: ${this.state.details.price}</div>
          </div>
        ) : (
          <div id="cars">
            {this.state.cars.length
              ? this.state.cars.map((car, index) => (
                  <div className="car" key={index} onClick={this.handleClick}>
                    <h1>
                      {car.manufacturer} {car.model}
                    </h1>
                    <img src={car.image} alt={car.model} />
                  </div>
                ))
              : "There are no cars to display"}
          </div>
        );
    }
}

