function toggleDetail(e) {
    const target =  $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    }
    else{
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if(!$(email).val()){
        alert("Email is required")
    }
    else if (!$(subject).val()){
        alert("Subject is required")
    }
    else if (!$(message).val()){
        alert("Message is required")
    }
    else {
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("") 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// TEST
const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');

const totalSlides = slides.length;
let slideIndex = 0;

function duplicateSlides() {
    // Duplicate all slides to create an infinite loop effect
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideshow.appendChild(clone);
    });
}

function showSlides() {
    slideIndex++;
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    if (slideIndex >= totalSlides) {
        setTimeout(() => {
            slideshow.style.transition = 'none';
            slideIndex = 0;
            slideshow.style.transform = `translateX(0)`;
            setTimeout(() => {
                slideshow.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }, 500); // Match the transition duration
    }
}

duplicateSlides();
setInterval(showSlides, 3000); // Ganti gambar setiap 3 detik
