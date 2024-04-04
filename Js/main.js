document.getElementById("toggle-side-bar").addEventListener("click",()=>{
    document.querySelector(".side-bar").classList.toggle("show-side-bar");
})


document.querySelectorAll(".light-box-toggle").forEach(element => {
    boxId = element.getAttribute("data-for");
    element.addEventListener("click",()=>{
        document.getElementById(boxId).classList.toggle("show-light-box");
    })
});

