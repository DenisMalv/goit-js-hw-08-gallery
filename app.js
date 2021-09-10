  const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
  ];

// получение доступов
const listGallery = document.querySelector('.js-gallery')
const modal = document.querySelector('.js-lightbox')
const closeButton = document.querySelector('.lightbox__button')
const galleryImage = document.querySelector('.gallery__image')
const modalImage = document.querySelector('.lightbox__image')

// функция разметки 
function createItems(array) {
 return array.map((elem) => {
    const {preview, original, description } = elem
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`    
  }).join('')
}
// вызов createItems
const markup = createItems(galleryItems)

// встраивание разметки
listGallery.insertAdjacentHTML("afterbegin", markup)

// встраивание елемента в модальное окно
function insertElementToModal(element) {
  modal.insertAdjacentElement('afterbegin', element)
}

// добавляем открытие модального окна
function openModalImg(element) {
  element.classList.add('is-open')
}

listGallery.addEventListener('click', (e) => {
  e.preventDefault()
  const condition = e.target.nodeName === 'IMG'
  // console.dir(e.target.dataset.source) - над этой строкой просидел 4 часа... 
  if (condition) {
    openModalImg(modal)
    modalImage.src = e.target.dataset.source
    
  }
})

// добавляем закрытие модального окна
function closeModalImg(element) {
  element.classList.remove('is-open')
  modalImage.src = ''
}

// слушатель бекдропа
modal.addEventListener('click', closeModalByClick)
function closeModalByClick(e) {
  // const condition = e.target.classList.contains('lightbox__overlay')
  if (e.target.classList.contains('lightbox__overlay')) {
    closeModalImg(modal)
  }
}

// слушатель кнопки Esc
window.addEventListener('keydown', closeModalByKeydown)
function closeModalByKeydown(e) {
  // const condition = e.code === 'Escape'
  if (e.code === 'Escape') {
   closeModalImg(modal)
  }
}

// слушатель Кнопки
modal.addEventListener('click', (e) => {
  if (e.target.dataset.action === 'close-lightbox') {  
    closeModalImg(modal)
  }
})

// зачистка слушателя
if (modal.classList.contains('.is-open')) {
  // window.removeEventListener('keydown', closeModalByKeydown) 
  modal.removeEventListener('click', closeModalByClick)
}
