import React from "react";

import Draggable from "./Draggable.jsx"
import DropTarget from "./DropTarget.jsx"
import AddButton from "./AddButton.jsx"


class Canvas extends React.Component {
	constructor(props){
		super(props);
		this.state = {children: []}
	}

	componentDidMount(){
		console.log("component did mount");
	}

	componentWillUnmount(){
		console.log("component will unmount")
	}

	add(){
		this.setState((state)=> ({
			children: [...state.children, <Draggable key={"key" + this.state.children.length} id={"Draggable " + this.state.children.length}/>]
		}))
	}

	render(){
		return (
			<div id="react-canvas">

				<div id="morph-container">
					<AddButton clickHandler={()=>{
						this.add()
					}}/>
					<DropTarget id="shape"/>
					<DropTarget id="color"/>
					<DropTarget id="size"/>
					<p id="text">click "+" to create shape. drag shape over boxes to morph</p>
				</div>
				<div id="child-container">
					{this.state.children}
				</div>
				<h3>React</h3>
			</div>
		)
	}
}
export default Canvas;


