import React, { Component } from 'react'

export default class FormHandlingClassComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
            tellusaboutyou: '',
            country: 'sg'
        }
    }

    userNameChange = (event) => {
        this.setState({
            userName: event.target.value
        });
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    tellUsAboutYouChange = (event) => {
        this.setState({
            tellusaboutyou: event.target.value
        });
    }

    countryChange = (event) => {
        this.setState({
            country: event.target.value
        });
    }

    handleSubmit = (event) => {
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const { userName, password, country, tellusaboutyou } = this.state;
        return (
            <div>
                <h3>Class Component - Form Handling</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username </label>
                        <input type="text" value={userName} onChange={this.userNameChange} />
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" value={password} onChange={this.passwordChange} />
                    </div>
                    <div>
                        <label>Country </label>
                        <select value={country} onChange={this.countryChange}>
                            <option value="sg">Singapore</option>
                            <option value="ind">India</option>
                            <option value="my">Malaysia</option>
                        </select>
                    </div>
                    <div>
                        <label>Tell us about you </label>
                        <textarea value={tellusaboutyou} onChange={this.tellUsAboutYouChange}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
