function renderGallery() {
  var template = `
    <a href="{{{img}}}" class="image-popup img-hover">
      <span class="icon icon-search"></span>
      <img src="{{{img}}}" alt="Image placeholder" class="img-fluid">
    </a>`;


  // please change these file to add more images
  // e.g.
  // 'img_1.jpg',
  // 'img_2.jpg',
  // 'img_3.jpg',
  // 'img_4.jpg',
  // 'img_5.jpg',
  // 'img_6.jpg',
  //  path names will be appended automatically
  //  images will appear in this order
  var strs = [
    'IMG_1.jpg',
    'IMG_10.jpg',
    'IMG_11.jpg',
    'IMG_12.jpg',
    'IMG_13.jpg',
    'IMG_14.jpg',
    'IMG_2.jpg',
    'IMG_3.jpg',
    'IMG_4.jpg',
    'IMG_5.jpg',
    'IMG_6.jpg',
    'IMG_7.jpg',
    'IMG_8.jpg',
    'IMG_9.jpg',
    'IMG_16.jpg',
    'IMG_17.jpg',
    'IMG_18.jpg',
    'IMG_19.jpg',
    'IMG_20.jpg',
    'IMG_22.jpg',
    'IMG_23.jpg',
    'IMG_24.jpg',
    'IMG_25.jpg',
    'IMG_26.jpg',
    'IMG_28.jpg',
    'IMG_29.jpg',
    'IMG_30.jpg',
	'cat_1.jpg',
	'dog_1.jpg',
	'image_100.jpg'
  ];

  var node = document.getElementById('gallery-content');
  for (var imgPath of strs) {
    var cp = template.replace("{{{img}}}", 'images/Gallery/' + imgPath);
    cp = cp.replace("{{{img}}}", 'images/Gallery/' + imgPath);
    var temp = document.createElement('div');
    temp.className = "col-md-4";
    temp.innerHTML = cp;
    node.append(temp);
  }
}