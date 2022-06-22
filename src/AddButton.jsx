import React from "react";
import ReactDOM from "react-dom";
import Draggable from "./Draggable.jsx"


function AddButton(props){
	return (
		<button 
			id="add"
			onClick={add}
		>
		<b>+</b>
		</button>
	)
}

export default AddButton;


function add(ev){
	ReactDOM.createPortal(<Draggable/>, document.getElementById("canvas-react"))
	
}

