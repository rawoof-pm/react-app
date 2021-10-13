import React, { useState } from 'react'

export default function FormHandlingFnComponent() {
    const [obj, setObj] = useState({
        userName: '',
        password: '',
        tellusaboutyou: '',
        country: 'sg'
    });

    function userNameChange(event) {
        setObj(function (prvState) {
            return {
                userName: event.target.value,
                password: prvState.password,
                tellusaboutyou: prvState.tellusaboutyou,
                country: prvState.country
            }
        });
    }

    function passwordChange(event) {
        setObj(function (prvState) {
            return {
                userName: prvState.userName,
                password: event.target.value,
                tellusaboutyou: prvState.tellusaboutyou,
                country: prvState.country
            }
        });
    }

    function tellUsAboutYouChange(event) {
        setObj(function (prvState) {
            return {
                userName: prvState.userName,
                password: prvState.password,
                tellusaboutyou: event.target.value,
                country: prvState.country
            }
        });
    }

    function countryChange(event) {
        setObj(function (prvState) {
            return {
                userName: prvState.userName,
                password: prvState.password,
                tellusaboutyou: prvState.tellusaboutyou,
                country: event.target.value
            }
        });
    }

    function handleSubmit(event) {
        alert(JSON.stringify(obj));
        event.preventDefault();
    }

    const { userName, password, country, tellusaboutyou } = obj;
    return (
        <div>
            <h3>Function Component - Form Handling</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username </label>
                    <input type="text" value={userName} onChange={userNameChange} />
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" value={password} onChange={passwordChange} />
                </div>
                <div>
                    <label>Country </label>
                    <select value={country} onChange={countryChange}>
                        <option value="sg">Singapore</option>
                        <option value="ind">India</option>
                        <option value="my">Malaysia</option>
                    </select>
                </div>
                <div>
                    <label>Tell us about you </label>
                    <textarea value={tellusaboutyou} onChange={tellUsAboutYouChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
