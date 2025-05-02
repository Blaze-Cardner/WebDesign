// script.js

document.addEventListener('DOMContentLoaded', function() {
  const hobbiesList = document.getElementById('hobbiesList');
  const numbersButton = document.getElementById('showNumbers');
  const squaresButton = document.getElementById('showSquares');

  if (hobbiesList && numbersButton && squaresButton) {
    numbersButton.addEventListener('click', function() {
      hobbiesList.style.listStyleType = 'decimal';
    });

    squaresButton.addEventListener('click', function() {
      hobbiesList.style.listStyleType = 'square';
    });
  }
});
