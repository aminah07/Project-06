// project testimonial slider code
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        780:{
            items:1
        },
        1000:{
            items:3
        }
    }
})


function loading(){
    document.getElementById('preloader').style.display = 'none';
}

function openMenu(){
    document.querySelector('.mobile-menu').style.transform = 'translateX(0px)';
    document.querySelector('.mobile-menu').style.transition = '1s';
}

function closeMenu(){
    document.querySelector('.mobile-menu').style.transform = 'translateX(-425px)';
    document.querySelector('.mobile-menu').style.transition = '1s';
}

var btns = document.querySelectorAll('.product-meta a:first-child');

btns.forEach(function(item){

    item.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.quickView-modal').style.display='block';
    });

});

function closeModal(){
    document.querySelector('.quickView-modal').style.display='none';  
}



var countDownDate = new Date("Oct 29, 2022 15:37:25").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






