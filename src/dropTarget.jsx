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

function dragOverHandler(ev){
    ev.preventDefault();
    ev.target.style.animation = "1s infinite alternate-reverse " + ev.target.id
}

function dragEnterHandler(ev){
    ev.preventDefault();
}

function dropHandler(ev){
    //changeShape(currentDraggable);
    ev.target.style.animation = ""
}

function dragleaveHandler(ev){
    ev.target.style.animation = ""
}

export default DropTarget;