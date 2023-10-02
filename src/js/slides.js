
let time = 3000,
    curretImageIndex = 0
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImage(){
    
   images[curretImageIndex].classList.remove("selected")
    
    curretImageIndex++

    if(curretImageIndex >= max)
       curretImageIndex = 0

    images[curretImageIndex].classList.add("selected")
}


function start(){
    setInterval(() => {
    nextImage()
    }, time)
} 

window.addEventListener("load", start)