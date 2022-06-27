import React from "react";
import ReactDOM from "react-dom";
import Draggable from "./Draggable.jsx"


function AddButton(props){
	return (
		<button 
			id="add"
			onClick={props.clickHandler}
		>
		<b>+</b>
		</button>
	)
}

export default AddButton;


