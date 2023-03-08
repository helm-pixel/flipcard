// Swipe left and right on touch devices
let touchStartX = 0;
let touchEndX = 0;

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
card.addEventListener('touchstart', e => {
touchStartX = e.touches[0].clientX;
})});

card.addEventListener('touchend', e => {
	touchEndX = e.changedTouches[0].clientX;

	if (touchEndX < touchStartX) {
		card.classList.add('swipe-left');
	} else if (touchEndX > touchStartX) {
		card.classList.add('swipe-right');
	}

	setTimeout(() => {
		card.classList.remove('swipe-left', 'swipe-right');
	}, 600);
});
