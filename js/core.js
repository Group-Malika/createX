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