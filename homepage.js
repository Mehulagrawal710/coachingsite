$(document).ready(function(){
    $("vid1").mouseenter(function(){
        $("vid1").animate({
            
            opacity: '1',
            height: '210px',
            width: '210px'
        },50);
    });
});

$(document).ready(function(){
    $("vid1").mouseleave(function(){
        $("vid1").animate({
            
            opacity: '1',
            height: '200px',
            width: '200px'
        },50);
    });
});



$(document).ready(function(){
    $("vid2").mouseenter(function(){
        $("vid2").animate({
            left:'300',
            right:'720',
            opacity: '1',
            height: '210px',
            width: '420px'
        },50);
    });
});

$(document).ready(function(){
    $("vid2").mouseleave(function(){
        $("vid2").animate({
            left:'310',
            right:'710',
            opacity: '1',
            height: '200px',
            width: '400px'
        },50);
    });
});



$(document).ready(function(){
    $("vid3").mouseenter(function(){
        $("vid3").animate({
           
            opacity: '1',
            height: '420px',
            width: '210px'
        },50);
    });
});

$(document).ready(function(){
    $("vid3").mouseleave(function(){
        $("vid3").animate({
            
            opacity: '1',
            height: '410px',
            width: '200px'
        },50);
    });
});



$(document).ready(function(){
    $("vid4").mouseenter(function(){
        $("vid4").animate({
            left:'300px',
            opacity: '1',
            height: '210px',
            width: '220px'
        },50);
    });
});

$(document).ready(function(){
    $("vid4").mouseleave(function(){
        $("vid4").animate({
            left:'310px',
            opacity: '1',
            height: '200px',
            width: '200px'
        },50);
    });
});




$(document).ready(function(){
    $("vid5").mouseenter(function(){
        $("vid5").animate({
        	right:'720px',
            left:'510px',
            opacity: '1',
            height: '210px',
            width: '210px'
        },50);
    });
});

$(document).ready(function(){
    $("vid5").mouseleave(function(){
        $("vid5").animate({
            right:'710px',
            left:'520px',
            opacity: '1',
            height: '200px',
            width: '190px'
        },50);
    });
});



$(document).ready(function(){
    $("vid6").mouseenter(function(){
        $("vid6").animate({
            left:'300',
            right:'720',
            opacity: '1',
            height: '210px',
            width: '420px'
        },50);
    });
});

$(document).ready(function(){
    $("vid6").mouseleave(function(){
        $("vid6").animate({
            left:'310',
            right:'710',
            opacity: '1',
            height: '200px',
            width: '400px'
        },50);
    });
});



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
