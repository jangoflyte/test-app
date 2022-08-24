import React from "react";
import {PersonList} from './PersonList';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            nickname: '',
            user: {
                name: 'Jim',
                email: 'jim@galvanize.com'
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            nickname: e.target.value,
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            user: {
                ...this.state.user,
                userNickname: this.state.nickname,
            },
            nickname: '',
        });
    };

    render() {
        return (
          <div>
            <PersonList user={this.state.user} />
            <label htmlFor="nickname">
                Nickname:
                <input type="text" id="nickname" value={this.state.nickname} onChange={this.handleChange}/>
            </label>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        );
    }
};