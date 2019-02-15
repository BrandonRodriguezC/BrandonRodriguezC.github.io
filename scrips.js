// Get the modal
const modal = document.getElementById('myModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img1 = document.getElementById('myImg1');
const img2 = document.getElementById('myImg2');
const img3 = document.getElementById('myImg3');
const img4 = document.getElementById('myImg4');

main();

function presentingModal(b,c){
 console.log(b);
  modal.style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = c;
  var modalImg = document.getElementById("imgModal");
  modalImg.src = b;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  } 

  function main(){
    img1.addEventListener('click', function () {
      presentingModal(img1.src, img1.alt);
    });
    img2.addEventListener('click', function () {
      presentingModal(img2.src, img2.alt);
    });
    img3.addEventListener('click', function () {
      presentingModal(img3.src, img3.alt);
    });
    img4.addEventListener('click', function () {
      presentingModal(img4.src, img4.alt);
    });
    
  }