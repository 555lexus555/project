setTimeout(function() {
    document.getElementById('imageID').style.display='none'
  }, 10*1000);


 


 function showModal() {
  $('#modal-layer').fadeIn('fast').delay(10000).fadeOut('slow', function() {
      setTimeout(showModal, 30000);
  });
}
setTimeout(showModal, 30000);

