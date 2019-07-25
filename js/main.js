var moreInfoBtn = document.querySelector('.showroom__item');
var showroomModal = document.querySelector('.showroom__item-details-modal');
var closeModalBtn = document.querySelector('.showroom__item-details-close-btn');


moreInfoBtn.addEventListener("click", function() {
    showroomModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function() {
    showroomModal.style.display = "none";
});