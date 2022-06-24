import React, { useState } from "react";

import Draggable from "./Draggable.jsx"
import DropTarget from "./DropTarget.jsx"
import AddButton from "./AddButton.jsx"


function Canvas(props){
	const [children, setChildren] = useState([1, 2, 3]);
	const add = () => {
		console.log("add")
		setChildren((prevState)=> [...prevState, 1])
		console.log(children.length);
	}

	return (
		<div id="canvas">
		    <div id="morph-container">
			<AddButton clickHandler={add}/>
		 	<DropTarget id="circle"/>
		 	<DropTarget id="color"/>
		 	<DropTarget id="size"/>
		 	<p id="text">click "+" to create shape. drag shape over boxes to morph</p>
		 	</div>
			{children.map((child, index) => <Draggable key={index}/>)}
		</div>
	)
}

export default Canvas;


