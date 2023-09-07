const title = document.querySelector("h2");


function handleMouseEnter(){
    title.innerText="The mouse is here!";
    title.style.color="pink";
}
function handleMouseLeave(){
    title.innerText="The mouse is gone!";
    title.style.color="blue";
}
function handleWindowResize(){
    title.innerText="You just resized!";
    title.style.color="purple";
}
function handleContextMenu(){
    title.innerText="That was a right click!";
    title.style.color="tomato";
}

title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("contextmenu",handleContextMenu);