$(document).ready(function () {
    // Toggle menu and burger icon
    $('.header_burger').click(function (event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // Close menu when clicking on a menu item
    $('.header_link').click(function (event) {
        $('.header_burger, .header_menu').removeClass('active');
        $('body').removeClass('lock');
    });

    // Close menu when clicking anywhere outside the menu
    $(document).click(function (event) {
        if (!$(event.target).closest('.header').length) {
            $('.header_burger, .header_menu').removeClass('active');
            $('body').removeClass('lock');
        }
    });

    // Prevent closing menu when clicking inside the menu
    $('.header_menu').click(function (event) {
        event.stopPropagation();
    });
});



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

function openModal() {
    document.getElementById("videoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("videoModal").style.display = "none";
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector('.back-to-top').style.display = "block";
    } else {
        document.querySelector('.back-to-top').style.display = "none";
    }
}

let tab = function(){
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
    tabContent = document.querySelectorAll('.tabs__content'),
    tabName;

    tabNav.forEach(item=> {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav(){
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName)
    }
    function selectTabContent(tabName){
        tabContent.forEach(item => {
            item.classList.contains(tabName)? item.classList.add('is-active') : item.classList.remove('is-active')

        })
        
    }

    

};


tab();



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
    acc[i].addEventListener("click", function () {
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
    acc[i].addEventListener("click", function () {
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











function validateForm() {
    var nameInput = document.getElementById('nameInput');
    var emailInput = document.getElementById('emailInput');
    var urlInput = document.getElementById('urlInput');
    var agreeCheckbox = document.getElementById('agreeCheckbox');

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var urlError = document.getElementById('urlError');
    var agreeError = document.getElementById('agreeError');

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    urlError.innerHTML = "";
    agreeError.innerHTML = "";

    var isValid = true;

    // Validate Name
    if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.innerHTML = "Invalid email format";
            isValid = false;
        }
    }

    // Validate URL
    if (urlInput.value.trim() === "") {
        urlError.innerHTML = "URL is required";
        isValid = false;
    } else {
        var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlRegex.test(urlInput.value.trim())) {
            urlError.innerHTML = "Invalid URL format";
            isValid = false;
        }
    }

    // Validate Agreement Checkbox
    if (!agreeCheckbox.checked) {
        agreeError.innerHTML = "You must agree to receive communications";
        isValid = false;
    }

    return isValid;
}