/**
 * Simple carousel functionality for the NewsFeed card display.
 * Could possibly be replaced with Slick slider in the future.
 */
export default class CardScroller {
	constructor() {
		this.cardRefs = [];
		this.containerRef = null;
	}

	/**
	 * Scroll one card to the left
	 */
	scrollLeft() {
		const currentIndex = this._leftmostCardIndex();
		const destIndex = currentIndex > 0 ? currentIndex - 1 : 0;
		const card = this.cardRefs[destIndex];
		const left = card.offsetLeft;
    	this.containerRef.scrollLeft = left - 15;
	}

	/**
	 * Scroll one card to the right
	 */
	scrollRight() {
		const currentIndex = this._leftmostCardIndex();
		const destIndex = currentIndex < this.cardRefs.length - 2 ? currentIndex + 1 : this.cardRefs.length - 1;
		const card = this.cardRefs[destIndex];
		const left = card.offsetLeft;
		this.containerRef.scrollLeft = left - 15;
	}

	/**
	 * Returns the index of the leftmost, fully-visible visible card in the scroll container
	 */
	_leftmostCardIndex() {
		const tolerance = 20; // Card can be up to %tolerance% pixels outside of the view and still be considered "visible"
		const container = this.containerRef;
		for (var i = 0; i < this.cardRefs.length; i++) {
			let card = this.cardRefs[i];
			if (card.offsetLeft + tolerance >= container.scrollLeft) {
				return i;
			}
		}
	}

	// rightmostCardIndex() {
	// 	const tolerance = 20;
	// 	const container = document.getElementById("news-feed-articles");
	// 	for (var i = this.cardRefs.length - 1; i >= 0; i--) {
	// 		let card = this.cardRefs[i];
	// 		if (card.offsetLeft + card.offsetWidth <= container.scrollLeft + container.offsetWidth) {
	// 			return i;
	// 		}
	// 	}
	// }
}
	