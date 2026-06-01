// Dynamic interaction framework handling user input selection and layout transitions
document.addEventListener('DOMContentLoaded', () => {
  const ratingForm = document.getElementById('rating-form');
  const ratingView = document.getElementById('rating-view');
  const thankYouView = document.getElementById('thank-you-view');
  const selectedRatingValue = document.getElementById('selected-rating-value');

  // Intercept the form submission event safely
  ratingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Use FormData framework api to catch targeted values cleanly
    const formData = new FormData(ratingForm);
    const selectedRating = formData.get('rating');

    if (selectedRating) {
      // Inject target score values into dynamic receipt tracking block element
      selectedRatingValue.textContent = selectedRating;

      // Handle UI state modification by safely controlling layout presentation states
      ratingView.classList.add('card__view--hidden');
      thankYouView.classList.remove('card__view--hidden');
    }
  });
});
