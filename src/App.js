import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

import DropTarget from "./dropTarget.jsx"
import AddButton from "./AddButton.jsx"


class App extends Component{
	render(){
		return (
		 <div className="App">
		 	<AddButton/>
		 	<DropTarget id="circle"/>
		 	<DropTarget id="color"/>
		 	<DropTarget id="size"/>
		 	<div id="canvas-react"/>
		 </div>
		);
	}
}

export default hot(module)(App);