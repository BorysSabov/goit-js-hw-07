import { galleryItems } from "./gallery-items.js";
// Change code below this line
const addGalleryPic = document.querySelector(".gallery");

const createGalleryEl = galleryItems
  .map(
    (item) =>
      ` <li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      />
   </a>
</li>`
  )
  .join("");

addGalleryPic.innerHTML = createGalleryEl;

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});
console.log(gallery);
gallery.on("open.simplelightbox", function () {
  console.log("Lightbox opened");
});
gallery.on("close.simplelightbox", function () {
  console.log("Lightbox closed");
});

gallery.on("next.simplelightbox", function () {
  console.log("Next image");
});

gallery.on("prev.simplelightbox", function () {
  console.log("Previous image");
});
