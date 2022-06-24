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


// function add(ev){
// 	ReactDOM.createPortal(<Draggable/>, document.getElementById("canvas-react"))
	
// }

// function Canvas(props){
// 	const [children, setChildren] = useState([]);
// 	return (
// 		<div>
// 			{children}
// 		</div>
// 	)
// }

// function Draggable(props){
//     let offsetX;
//     let offsetY;

//     function dragStartHandler(ev){
//         const rect = ev.target.getBoundingClientRect();
//         offsetX = ev.clientX - rect.x;
//         offsetY = ev.clientY - rect.y;

//         //currentDraggable = ev.target;
//     }

//     function dragEndHandler(ev){
//         const left = parseInt(ev.target.style.left);
//         const top = parseInt(ev.target.style.top);

//         ev.target.style.top = (ev.clientY - offsetY) + "px";
//         ev.target.style.left = (ev.clientX - offsetX) + "px";
//     }
    
//     return (
//         <div 
//             className={`draggableShape pink square`}
//             draggable={true}
//             onDragStart={dragStartHandler}
//             onDragEnd={dragEndHandler}
//         />
//     )
// }