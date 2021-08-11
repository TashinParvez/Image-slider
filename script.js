let flag =0;

function newslide(x){
  
    flag = flag + x ;
    slideshow(flag);
}

slideshow(flag);

function slideshow(num){
    let slides= document.getElementsByClassName("slide");

    for(let y of slides){
        y.style.display="none";
    }

    if(flag == slides.length ){
        flag = 0;
        num = 0;
    }
    if(flag < 0 ){
        flag = slides.length-1;
        num = slides.length-1;
    }

    slides[num].style.display="block";
}
