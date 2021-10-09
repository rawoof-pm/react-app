import React, { useState } from "react";

function StateFnComponent() {

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

    let isLoggedIn = obj.isLoggedIn;
    let loginOrLogoutBtn;
    if (isLoggedIn) {
        loginOrLogoutBtn = <button onClick={doLogout}>{obj.buttonText}</button>;
    } else {
        loginOrLogoutBtn = <button onClick={doLogin}>{obj.buttonText}</button>;
    }
    return (
        <div>
            <span>Function Component - Welcome {obj.messsage} </span>
            {loginOrLogoutBtn}
        </div>
    )
}
export default StateFnComponent