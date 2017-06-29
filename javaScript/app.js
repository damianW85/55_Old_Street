var dynamicGlyf = document.getElementById('dynamicGlyf');

function uploadPdf() {

  var pdfInput = document.getElementById('menuUpload');

  if(pdfInput.files.length > 0) {

    var formData = new FormData();
    formData.append('newMenu', pdfInput.files[0]); 

    var request = new XMLHttpRequest()
        
    request.onreadystatechange = function() {

      if(request.readyState == 4 && request.status == 200) {
        
        console.log(request.responseText);
      }
    }
    
    request.open('POST', 'upload.php', true);
    request.send(formData);
  }
  else {

    console.log('No files found.');
  }
}

setInterval(function() {

  var spritePosition = Math.floor((Math.random() * 20) + 1) * 124.68;
  dynamicGlyf.style.backgroundPositionX = '-' + spritePosition+ 'px';
}, 2000)

var burger = document.getElementById('main-burger'), 
nav = document.getElementById('mainNav');

function navControl() {

  if(burger.classList.contains('burger--active')) {

    nav.classList.remove('nav_open');
    burger.classList.remove('burger--active');
    document.body.style.position = 'relative';
  } 
  else {
    burger.classList.add('burger--active');
    nav.classList.add('nav_open');
    document.body.style.position = 'fixed';
  }
}

burger.addEventListener('click', navControl);

var navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(function(navLink) {

  navLink.addEventListener('click', function() {

    if(burger.classList.contains('burger--active')) {

      nav.classList.remove('nav_open');
      burger.classList.remove('burger--active');
      document.body.style.position = 'relative';
    } 
  });
});