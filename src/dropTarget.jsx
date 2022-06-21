import React from "react";

function DropTarget(props){
	return (
        <div
            onDragOver={dragOverHandler} 
            onDragEnter={dragEnterHandler} 
            onDrop={dropHandler}
            onDragLeave={dragleaveHandler}
            id={props.id}
        />
        )	
}

function dragOverHandler(e){
    e.preventDefault();
    e.target.style.animation = "1s infinite alternate-reverse " + e.target.id
}

function dragEnterHandler(e){
    e.preventDefault();
    //e.target.style.animation = "1s infinite alternate-reverse circle"
}

function dropHandler(e){
    //changeShape(currentDraggable);
    e.target.style.animation = ""
}

function dragleaveHandler(e){
    e.target.style.animation = ""
}

export default DropTarget;