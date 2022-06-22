import React from "react";



function Draggable(props){
    let offsetX;
    let offsetY;

    function dragStartHandler(ev){
        const rect = ev.target.getBoundingClientRect();
        offsetX = ev.clientX - rect.x;
        offsetY = ev.clientY - rect.y;

        //currentDraggable = ev.target;
    }

    function dragEndHandler(ev){
        const left = parseInt(ev.target.style.left);
        const top = parseInt(ev.target.style.top);

        ev.target.style.top = (ev.clientY - offsetY) + "px";
        ev.target.style.left = (ev.clientX - offsetX) + "px";
    }
    
    return (
        <div 
            className={`draggableShape pink square`}
            draggable={true}
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
        />
    )
}


export default Draggable;




function createDraggable(){
    const newDraggable = document.createElement("div");
    newDraggable.draggable = true;
    newDraggable.classList.add("draggableShape", "square", "pink");

    let offsetX;
    let offsetY;

    newDraggable.addEventListener("dragstart", (e)=>{
        const rect = e.target.getBoundingClientRect();
        offsetX = e.clientX - rect.x;
        offsetY = e.clientY - rect.y;

        currentDraggable = e.target;
    })

    newDraggable.addEventListener("dragend", (e)=>{
        const left = parseInt(e.target.style.left);
        const top = parseInt(e.target.style.top);

        e.target.style.top = (e.clientY - offsetY) + "px";
        e.target.style.left = (e.clientX - offsetX) + "px";
    })

    return newDraggable;
}