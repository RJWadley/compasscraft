$(".pageTitle").click(function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
})

// Get the modal
var modal = $(".modal");

// Get the button that opens the modal
var btn = $(".join-link");

// Get the <span> element that closes the modal
var span = $(".close");

// When the user clicks on the button, open the modal
btn.click(function() {
  modal.css("display", "block");
})

// When the user clicks on <span> (x), close the modal
span.click(function() {
  modal.css("display", "none");
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("modal")) {
    modal.css("display", "none");
  }
}
