import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const newPictureEl = galleryItems.map(option => {
    const newEl = document.createElement('div')
    newEl.classList.add('gallery__item');
    console.log(newEl);
    newEl.insertAdjacentHTML('beforebegin','<a></a>');
});


// https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js
