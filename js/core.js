//progress bar//



let circulerProgress = document.querySelector(".circular-prigress"),
    progressValue = document.querySelector(".progress-value");
  
let progressStratValue = 0,
    progressEndValue = 90,
    speed = 10;

let progress = setInterval(() => {
  progressStratValue++;

  progressValue.textContent = `${progressStratValue}%`
  circulerProgress.style.background = ` conic-gradient(#c562a9 ${progressStratValue * 1.6}deg, #dad5d5 0deg)`

  if(progressStratValue == progressEndValue){
    clearInterval(progress);
  }
}, speed);


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
