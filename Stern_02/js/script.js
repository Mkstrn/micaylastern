const demoButton = document.querySelector(".clickcount")
const originalColor = demoButton.style.backgroundColor;

demoButton.addEventListener("click", () => {
	console.log("Button Was Clicked")
})

demoButton.addEventListener('click', function() {
      if (this.style.backgroundColor === originalColor || this.style.backgroundColor === '') {
        this.style.backgroundColor = 'pink'; // Change to new color
      } else {
        this.style.backgroundColor = originalColor; // Revert to original
      }
    });