function changeScore(event) {
  const rating = event.target.innerHTML;
  document.getElementById('score').innerHTML = rating;
}

// TODO: Consider adding message to show user that the rating must be selected
function revealThankYou() {
  if (document.getElementById('score').innerHTML != '0') {
    document.getElementById('thankyou-card').removeAttribute('hidden');
    document.getElementById('rating-card').setAttribute('hidden', 'true');
  }
}

for (let i = 1; i <= 5; i++) {
  document.getElementById(`rating-label-${i}`)
    .addEventListener('click', changeScore);
}

document.getElementById('submit').addEventListener('click', revealThankYou);
