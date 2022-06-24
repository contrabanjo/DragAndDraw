import React, {Component} from "react";
import {hot} from "react-hot-loader";


import Canvas from "./Canvas.jsx"


class App extends Component{
	render(){
		return (
		 <div className="App">
		 	<Canvas/>
		 </div>
		);
	}
}

export default hot(module)(App);