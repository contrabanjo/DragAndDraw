import React, { useState } from "react";
import Draggable from "./Draggable.jsx"

function Canvas(props){
	const [children, setChildren] = useState([1, 2, 3]);
	return (
		<div>
			{children.map((child)=> <Draggable/>)}
		</div>
	)
}

export default Canvas;


