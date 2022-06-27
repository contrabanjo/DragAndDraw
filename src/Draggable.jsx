import React, {useState} from "react";



function Draggable(props){

    let offsetX;
    let offsetY;

    const dragStartHandler = function(ev){
        ev.dataTransfer.setData("text/plain", ev.target.id);

        const rect = ev.target.getBoundingClientRect();

        offsetX = ev.clientX - rect.x;
        offsetY = ev.clientY - rect.y;      
    }

    const dragEndHandler = function(ev){
        const rect = ev.target.getBoundingClientRect();
        
        let left = parseInt(ev.target.style.left);
        if (isNaN(left)) left = 0;
        
        const canvasLeftSide = rect.x - left;
        let newLeft = (ev.clientX - offsetX)-canvasLeftSide;
        if (newLeft < 0) newLeft = 0;

        const top = parseInt(ev.target.style.top);
      
        ev.target.style.left = newLeft + "px";
        ev.target.style.top = (ev.clientY - offsetY) + "px";
    }
    
    return (
        <div 
            id={props.id}
            className={`draggableShape`}
            // className={props.class}
            draggable={true}
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
        />
    )
}


export default Draggable;


