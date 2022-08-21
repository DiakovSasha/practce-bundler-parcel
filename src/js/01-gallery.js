// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
// Change code below this line

const gallery = document.querySelector('.gallery');

function markUp(pic) {
  return pic
    .map(
      ({
        original,
        preview,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
    src='${preview}'
    alt="${description}"
  />
</a>
`
    )
    .join('');
}

const renderPic = markUp(galleryItems);
gallery.insertAdjacentHTML('beforeEnd', renderPic);
console.log(renderPic);
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 300 });
