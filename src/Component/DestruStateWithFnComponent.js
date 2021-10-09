import React, { useState } from 'react'

function DestruWithFnComponent() {

    const [obj, setObj] = useState({
        messsage: "Visitor",
        buttonText: "Login",
        isLoggedIn: false
    });

    const afterSetState = () => {
        console.log(obj);
    }

    const doLogin = () => {
        setObj({
            messsage: "User",
            buttonText: "Logout",
            isLoggedIn: true
        }, afterSetState());
    }

    const doLogout = () => {
        setObj({
            messsage: "Visitor",
            buttonText: "Login",
            isLoggedIn: false
        }, afterSetState());
    }

    console.log(obj);
    const { messsage, buttonText, isLoggedIn } = obj;

    let loginOrLogoutBtn;
    if (isLoggedIn) {
        loginOrLogoutBtn = <button onClick={doLogout}>{buttonText}</button>;
    } else {
        loginOrLogoutBtn = <button onClick={doLogin}>{buttonText}</button>;
    }
    return (
        <div>
            <span>State Destructured in Function Component - Welcome {messsage} </span>
            {loginOrLogoutBtn}
        </div>
    )

}
export default DestruWithFnComponent