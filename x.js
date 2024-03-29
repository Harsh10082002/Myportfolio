function changePage(button) {
    // Remove 'active' class from all buttons
    var buttons = document.querySelectorAll('.navigation button');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
  
    // Add 'active' class to the clicked button
    button.classList.add('active');
  }
  