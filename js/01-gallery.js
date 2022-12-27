import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const boxMarkup = createPictureBoxMarkup(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", boxMarkup);

galleryBox.addEventListener("click", onPictureClick);

function createPictureBoxMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `;
    })
    .join("");
}

function onPictureClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img class="lightbox__image" src="${event.target.dataset.source}" alt="" />
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscape);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscape);
      },
    }
  );
  instance.show();
  function onEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
