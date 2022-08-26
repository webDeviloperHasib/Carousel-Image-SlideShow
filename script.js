let index = 1;
let slide = document.getElementsByClassName('myslide')
let dot = document.getElementsByClassName('dot')

function showSlide(n){
    if(n > slide.length){index = 1}
    if(n < 1){index = slide.length}
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = "none"
    }
    for(let j = 0; j < dot.length; j++){
        dot[j].className = dot[j].className.replace(" active", "")
    }
    slide[index - 1].style.display = "block";
    dot[index - 1].className += " active";
}

showSlide(index)
function plus(n){
    showSlide(index += n)
}
function current(n){
    showSlide(index = n)
}