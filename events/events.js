// Write all your JavaScript and JQuery code in this file! :)
/* START PROVIDED CODE */

$("#moveButton").on("click", function () {
    // $(this) refers to the element that was clicked
    $("#message").css({left: randomX(),top: randomY() ,position:'absolute'});
});

function randomX() {
  return Math.random() * $(window).width();
}

function randomY() {
  return Math.random() * $(window).height();
}
/* END PROVIDED CODE */
randomX();
randomY(); 