$(document).ready(function(){

//        NAV BAR
    




// SCROLL WHEN CLICK ON NAV BAR

$(".apropos").click(function(){
    $("#main1").scroll();
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});






//        MENU BURGER
$(".navBarMenu").hide();
$(".linkedinBleu").hide();
// $(".navBar").hide();


$(".imgBurger").click(function () {
    if ( $( ".navBarMenu").first().is( ":hidden" ) ) {
        $( ".navBarMenu").slideDown( "slow" );
      } else {
        $( ".navBarMenu" ).slideUp("slow");
      }
});


$(".linkedinBlanc").mouseenter(function(){
    $(".linkedinBlanc").attr("src", "images/linkedin.png");
});
$(".linkedinBlanc").mouseleave(function(){
    $(".linkedinBlanc").attr("src", "images/linkedinblanc.png");
});
    
    











// ANIMATION BOUTON MAIN 1 ON HOVER

        $(".telecharger").mouseenter(function(){
            $(".telecharger").animate({opacity: 0.6});
        });
        $(".telecharger").mouseleave(function(){
            $(".telecharger").animate({opacity: 1});
        });

        $(".contact").mouseenter(function(){
            $(".contact").animate({opacity: 0.6});
        });
        $(".contact").mouseleave(function(){
            $(".contact").animate({opacity: 1});
        });
    

// ANIMATION BOUTON MAIN 4 ON HOVER

$(".validation").mouseenter(function(){
    $(".validation").animate({opacity: 0.6});
});
$(".validation").mouseleave(function(){
    $(".validation").animate({opacity: 1});
});







































});