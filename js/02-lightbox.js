import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const boxMarkup = createPictureBoxMarkup(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", boxMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createPictureBoxMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__el">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>
        `;
    })
    .join("");
}

console.log(galleryItems);
