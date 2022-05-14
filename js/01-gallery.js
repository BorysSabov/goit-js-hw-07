import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const addGalleryItems = document.querySelector('.gallery');

const createGalleryEl = galleryItems.map( item => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>
    </div>`
    )
    .join('');
    
    addGalleryItems.innerHTML = createGalleryEl;
    // addGalleryItems.addEventListener('click', holdGalleryClick);

    function onOpenModalImg(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  let valueImg = evt.target.closest('.gallery__image');
        valueImg = basicLightbox.create(`
    <img
      src="${valueImg.dataset.source}"
    />
    `);
        valueImg.show();
}

addGalleryItems.addEventListener('click', (event) => {
    event.preventDefault();
    onOpenModalImg();
    console.log(event);
});


// function onCloseModalImg(event) {

// }


// function holdGalleryClick(evt) {
//     evt.preventDefault();
//     const isGalleryImgBigEl = evt.target.clasList.contains('.gallery__image');
//     if (!isGalleryImgBigEl) {
//         return;
//     }
//     const isGalleryImgValue = evt.target;
//     let imgValue = isGalleryImgValue.closest('.gallery__image');
//     imgValue = basicLightbox.create(`<img width = "1280" height = "800" src = ${imgValue.dataset.source}>`).show()
// };





