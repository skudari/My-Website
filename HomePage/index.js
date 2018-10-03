  /* Demo purposes only */
  $("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display="block";
};

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}


  function addImage(pk) {
      alert("addImage: " + pk);
  }

  $('#myModal .save').click(function (e) {
      e.preventDefault();
      addImage(5);
      $('#myModal').modal('hide');
      //$(this).tab('show')
      return false;
  })