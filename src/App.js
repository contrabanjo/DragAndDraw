import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import DropTarget from "./dropTarget.jsx"

class App extends Component{
	render(){
		return (
		 <div className="App">
		 	{/*<h1>Hello, World!</h1>*/}
		 	<DropTarget id="circle"/>
		 	<DropTarget id="color"/>
		 	<DropTarget id="size"/>
		 </div>
		);
	}
}

export default hot(module)(App);