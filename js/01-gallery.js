import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const addGalleryItems = document.querySelector(".gallery");

const createGalleryEl = galleryItems
  .map(
    (item) =>
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
  .join("");

addGalleryItems.innerHTML = createGalleryEl;

function onOpenModalImg() {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  let valueImg = event.target.closest(".gallery__image");
  valueImg = basicLightbox.create(`
    <img
      src="${valueImg.dataset.source}"
    />
    `);
  valueImg.show();
}

addGalleryItems.addEventListener("click", (event) => {
  event.preventDefault();
  onOpenModalImg();
  console.log(event);
});
