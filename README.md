# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My Goal
Begining to Master in all the concepts of REACT!

## What is React ?
* Open source library for building User Interface.
* There are two key point in the definition.
* React is JavaScript library and its not a framework.
* Its focus on one thing and doing that one thing(Building User Interfaces) really well.
  * React does not focus on other things like Routing or HTTP requests, other functionality and its responsible for only Rich UI.
* How you would handle routing or http request and other functionality ?
   * React has rich eco system and play well with other libraries and more than capable of full pledged web applications.

## Why learn React ?
* React library is created and maintained by Facebook. 
* Facebook uses this library for own products and invest money and resources to keep the project alive and you can be rest assured it is not going to die down any time soon.
* More than 100k stars on Github and Huge community behind it.

## Component Based Architecture
* React is component based architecture.
* This lets you breakdown the application  into small encapsulated parts which can be composed to make more complex UI.

## React is declarative 
* Tell React what you want and React will build the actual UI.
* React will handle effeciently updating and rendering of the components.
* DOM updates are handles gracefully in React.

## More on why React ?
* Seamlessly integrate react into any of your applications.
* Portion of your page or a complete page or even an entire application itself.
* React native for mobile applications.

## Prerequisites
* HTML, CSS, JavaScript fundamentals are absolutely necessary.
* Basic knowledge of ES6
  * The below concepts you should be aware of
   * JavaScript - 'this' keyword, filter, map and reduce methods.
   * ES6 - let, const, arrow functions, template literals, default parameters, object literals, rest and spread operators, destructuring assignment.

## How to Create React App ?
* `create-react-app` is command line interface tool that allows you to quickly create and run react app with no configuration
  * `npx create-react-app <app-name>`
* Here I have created hello-world branch to understand how React app structure looks like.
* Other way to create React App
  * `npm install create-react-app -g` and this command will install the create-react-app globally then you can simply use `create-react-app <app-name>`. 
  
 
## What is npx ?
* npx is npm package runner which gets installed when you install node that is how we are able to run directly without having to install it.

## How to Run React App ?
* Go to project main folder and run npm start cli command will start the react app.
* By default browser will open with http://localhost:3000 and app will be shown on the browser.

## What is React Component ?
* In React, Component is part of UI.
* A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components.
* Components are also re-usable, the same component can be used with different properties to display different information.

## Types of React Component 
* Functional Component
  * Simple JavaScript function
    ```
    function welcome(props) {
       return <h1>Hello {props.name}</h1>;
    }
    ```
* Class Component
    ```
    class Welcome extends React.Component {
       render() {
         return <h1>Hello {this.props.name}</h1>;
       }
    }
    ```
