const circle = document.getElementById("circle");
const main = document.getElementById("main");
let currentDraggable;


const add = document.getElementById("add")
add.addEventListener("click", (e)=>{
    document.getElementById("canvas").appendChild(createDraggable());
});


//circle
circle.addEventListener("dragover", (e)=>{
    e.preventDefault();
    e.target.style.animation = "1s infinite alternate-reverse circle"
})

circle.addEventListener("dragenter", (e)=>{
    e.preventDefault();
    e.target.style.animation = "1s infinite alternate-reverse circle"
})

circle.addEventListener("drop", (e)=>{
    changeShape(currentDraggable);
    e.target.style.animation = ""
})

circle.addEventListener("dragleave", (e)=>{
    e.target.style.animation = ""
})

//color
color.addEventListener("dragover", (e)=>{
    e.preventDefault();
    e.target.style.animation = "1s infinite alternate-reverse color"
})

color.addEventListener("dragenter", (e)=>{
    e.preventDefault();
    e.target.style.animation = "1s infinite alternate-reverse color"
})

color.addEventListener("drop", (e)=>{
    changeColor(currentDraggable);
    e.target.style.animation = ""
})

color.addEventListener("dragleave", (e)=>{
    e.target.style.animation = ""
})

//size
size.addEventListener("dragover", (e)=>{
    e.preventDefault();
    e.target.style.animation = "1s infinite alternate-reverse size"
})

size.addEventListener("dragenter", (e)=>{
    e.preventDefault();
    e.target.style.animation = "1s infinite alternate-reverse size"
})

size.addEventListener("drop", (e)=>{
    currentDraggable.classList.toggle("small")
    e.target.style.animation = ""
})

size.addEventListener("dragleave", (e)=>{
    e.target.style.animation = ""
})

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

function changeShape(element){
   if (element.classList.contains("square")){
        element.classList.remove("square");
        element.classList.add("circle"); 
   } else {
       element.classList.remove("circle");
       element.classList.add("square"); 
   }    
}

function changeColor(element){
   if (element.classList.contains("pink")){
        element.classList.remove("pink");
        element.classList.add("yellow"); 
   } else {
       element.classList.remove("yellow");
       element.classList.add("pink"); 
   }    
}