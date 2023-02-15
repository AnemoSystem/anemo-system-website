/* Navbar */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 

/* Navbar Mobile */
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

/* Reveal text */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

/* Title Animation takes a while to stop */
$(document).ready(function () {
  const title = document.querySelectorAll('#A, #N, #E, #M, #O, #S, #Y, #S2, #T, #E2, #M2, a');

  $(title).on("animationiteration", function () {
    $(this).removeClass("animated");
    console.log("out");
  });

  $(title).hover(function () {
    $(this).addClass("animated");
    console.log("over");
  });
});

/* Loading */
$(window).on("load", function(){
  $(".load-wrapper").fadeOut("slow");
});

/* Button */
$(document).ready(function () {
  const btn = document.getElementById('download');
  const btnbox = document.getElementById('btnbox');
  const buttonHeight = 50;
  const buttonWidth = 150;
  const maxWidth = window.innerWidth - buttonWidth;
  const maxHeight = window.innerHeight - buttonHeight;

  btn.addEventListener('click', () => {
    alert('Bela tentativa');
    window.close();
  })

  btn.addEventListener('mouseover', () => {
    console.log('Você não deveria estar vendo essa mensagem');
    btn.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    btnbox.style.height = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
  })
})



