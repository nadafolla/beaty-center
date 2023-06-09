
var images= [

    "dedou.jpg","im1.jpg","dow.jfif","dow1.jfif","dow2.jfif","dow3.jfif","dow4.jfif"
  ];
 
 
 //function createImageElement(src) {
    //var $div = $('<div></div>').addClass("images");
    //var $img = $('<img>').attr("src", src);
    //$div.append($img);
   // return $div;
 // }
  
  
 // function displayGallery() {
 //   var $gallery = $('#gallery');
  //  images.forEach(function (image) {
  //    var $imageElement = createImageElement(image);
  //    $gallery.append($imageElement);
  //  });
 // }
 
  function createImageElement(src) {
    var div = document.createElement("div");
    div.classList.add("image");
    var img = document.createElement("img");
    img.src = src;
    div.appendChild(img);
    return div;
  }
  function displayGallery() {
    var gallery = document.getElementById("gallery");
    images.forEach(function (image) {
      var imageElement = createImageElement(image);
      gallery.appendChild(imageElement);
    });
  }
  displayGallery();