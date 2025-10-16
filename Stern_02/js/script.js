const demoButton = document.querySelector(".clickcount")
const originalColor = demoButton.style.backgroundColor;

demoButton.addEventListener("click", () => {
	console.log("Button Was Clicked")
})

    let count = 0;

    function incrementCounter() {
      count++;
      document.getElementById("count").innerText = count;
    }

const getUserSelectedText = () => {
  return window.getSelection().toString();
}

/* clock */

function updateClock() {
      const now = new Date();
      let hours = now.getHours().toString().padStart(2, '0');
      let minutes = now.getMinutes().toString().padStart(2, '0');
      let seconds = now.getSeconds().toString().padStart(2, '0');

      const currentTime = `${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').textContent = currentTime;
    }

    updateClock();
    setInterval(updateClock, 1000);

/* button color change */
const colorPicker = document.getElementById("bgColorPicker");

    colorPicker.addEventListener("input", function() {
      document.body.style.backgroundColor = this.value;
    });