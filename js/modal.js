
function open_modal_poster(modal_id) {
    // Get the modal
    var modal = document.getElementById(modal_id + '_modal');

    // Display the modal
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementById(modal_id + '_close');

    // Get the navbar and make it go away
    var navbar = document.getElementById("site-header");
    navbar.style.zIndex = 0;

    // When the user clicks on <span> (x), close the modal and put the navbar back
    span.onclick = function() {
      modal.style.display = "none";
      navbar.style.zIndex = 99;
    }
}