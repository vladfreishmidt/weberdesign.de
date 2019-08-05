var showroomItemPreviewImgs = document.querySelectorAll('.showroom__item');
var modalWindows = document.querySelectorAll('.showroom__item-details-modal-container');
var closeModalBtns = document.querySelectorAll('.showroom__item-details-close-btn');
var i = 0;

while (i < showroomItemPreviewImgs.length) {
    showroomItemPreviewImgs[i].onclick = function (e) {
        var itemModal = this.querySelector('.showroom__item-details-modal-container');

        if (itemModal.classList.contains('item-selected')) {
            itemModal.classList.remove('item-selected');
        } else {
            itemModal.classList.add('item-selected');
        }
    }
    i++
}




