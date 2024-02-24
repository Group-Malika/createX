//progress bar//   






function startProgressBar(progressElement, startValue, endValue, speed, progressBarColor) {
  let progressStratValue = startValue;

  let progress = setInterval(() => {
    progressStratValue++;

    progressElement.querySelector(".progress-value").textContent = `${progressStratValue}`;
    progressElement.querySelector(".circular-prigress").style.background = `conic-gradient(${progressBarColor} ${progressStratValue * 4.6}deg, #dad5d5 0deg)`;

    if (progressStratValue == endValue) {
      clearInterval(progress);
    }
  }, speed);
}

// Example usage for each progress bar with different colors
let progressElement1 = document.querySelectorAll(".card_progress")[0];

startProgressBar(progressElement1, 0, 80, 10, '#c562a9'); // Purple color

let progressElement2 = document.querySelectorAll(".card_progress")[1];
startProgressBar(progressElement2, 0, 45, 20, '#F52F6E'); // Blue color

let progressElement3 = document.querySelectorAll(".card_progress")[2];
startProgressBar(progressElement3, 0, 60, 15, '#5A87FC'); // Red color


let progressElement4 = document.querySelectorAll(".card_progress")[3];
startProgressBar(progressElement4, 0, 100, 15, '#03CEA4'); // Red color

// Add more progress bars as needed with different colors

//accardion//

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;

        // Close all other accordion panels
        for (var j = 0; j < acc.length; j++) {
            if (j !== i) {
                acc[j].classList.remove("active");
                var otherPanel = acc[j].nextElementSibling;
                otherPanel.style.maxHeight = null;
            }
        }

        // Toggle between adding and removing the "active" class
        this.classList.toggle("active");

        // Toggle between hiding and showing the active panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
