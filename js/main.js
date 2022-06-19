let mouseCursor = document.querySelector(".cursor");
let btn = document.querySelector("button");

window.addEventListener("mousemove", cursor);

function cursor(e){
    gsap.to(mouseCursor, 0.2,{
        x: e.clientX, //The clientX read-only property of the MouseEvent interface provides the horizontal coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page)
        y: -46 +(e.clientY) //same as above
    }); 
}

btn.forEach(link => {
    link.addEventListener("mouseover",  ()=>{
        mouseCursor.classList.remove("scale-cursor");
        gsap.to(mouseCursor, 0.4,{
            scale:1
        });
    });
    
    link.addEventListener("mouseleave",  ()=>{
        mouseCursor.classList.remove("scale-cursor");
        gsap.to(mouseCursor, 0.4,{
            scale:1
        });
    });

});
// gsap.to(".mermaid", {
//     duration: 2, y: 300, border:"5px solid white", ease:"back"
// });