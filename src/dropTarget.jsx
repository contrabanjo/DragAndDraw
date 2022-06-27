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
    const droppedElement = document.getElementById(ev.dataTransfer.getData("text/plain"))
    droppedElement.classList.toggle(ev.target.id);
    ev.target.style.animation = ""
    console.log("item dropped on ", ev.target.id)
}

function dragleaveHandler(ev){
    ev.target.style.animation = ""
}

export default DropTarget;