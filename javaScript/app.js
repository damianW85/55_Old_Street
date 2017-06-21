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