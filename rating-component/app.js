function changeScore(event) {
  const rating = event.target.innerHTML;
  document.getElementById('score').innerHTML = rating;
}

// TODO: Validate that the user has selected a value
function revealThankYou() {
  document.getElementById('thankyou-card').removeAttribute('hidden');
  document.getElementById('rating-card').setAttribute('hidden', 'true');
}

document.getElementById('rating-label-1').addEventListener('click', changeScore);
document.getElementById('rating-label-2').addEventListener('click', changeScore);
document.getElementById('rating-label-3').addEventListener('click', changeScore);
document.getElementById('rating-label-4').addEventListener('click', changeScore);
document.getElementById('rating-label-5').addEventListener('click', changeScore);

document.getElementById('submit').addEventListener('click', revealThankYou);
