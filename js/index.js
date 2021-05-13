const accordionButtons = document.querySelectorAll(".accordion__button");
const aboutMeAccordionButtons = document.querySelectorAll(".about-me__accordion__button");
const accordionImages = document.querySelectorAll(".portfolio__img--grid");

// My Work Page. Accordion dropdown and Modal Image Zoom.
accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle("accordion__button--active");

        if (button.classList.contains("accordion__button--active")) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        } else {
            accordionContent.style.maxHeight = 0;
        }
    })
})

aboutMeAccordionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const aboutMeAccordionContent = button.nextElementSibling;

        button.classList.toggle("about-me__accordion__button--active");

        if (button.classList.contains("about-me__accordion__button--active")) {
            aboutMeAccordionContent.style.maxHeight = aboutMeAccordionContent.scrollHeight + "px";
        } else {
            aboutMeAccordionContent.style.maxHeight = 0;
        }
    })
})

// Modal Zoom for each image
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

accordionImages.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = image.src;
        captionText.innerHTML = image.alt;
    })
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


