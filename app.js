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

console.log(galleryItems)
  // получение доступов 
const listGallery = document.querySelector('.js-gallery')
const modal = document.querySelector('.js-lightbox')
const closeButton = document.querySelector('.lightbox__button')
const galleryImage = document.querySelector('.gallery__image')
const modalImage = document.querySelector('.lightbox__image')
console.log(listGallery)
console.log(modal)
console.log(closeButton)

// шаблон разметки
  const item = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>`
// console.log(item)
// функция разметки 

function createItems(array) {
  // console.log(array)
 return array.map((elem) => {
    const {preview, original, description } = elem
    // console.log(preview, original, description )
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
  // console.log(result.join(""))
}
// вызов createItems
const markup = createItems(galleryItems)
// console.log(markup)
// встраивание разметки
listGallery.insertAdjacentHTML("afterbegin", markup)

// создание наблюдателя.
/*const options = {
  root: listGallery,
  rootMargin: "0px",
  threshold: 0,
}
const observer = new IntersectionObserver(callback, options)
function callback(entries) {
  console.log(entries)
  entries.forEach((entry)=> {
    console.log(entry)
    if (entry.isIntersecting) {
      console.log(entry.target)
      
    }
  })
}
const items =[...listGallery.children]
console.log(items)

items.forEach((item)=> observer.observe(item))
*/
// встраивание в модальное окно
function insertElementToModal(element) {
  modal.insertAdjacentElement('afterbegin', element)
}
// console.log(originalImage)

// добавляем открытие модального окна
function openModalImg(element) {
  element.classList.add('is-open')
}

listGallery.addEventListener('click', (e) => {
  e.preventDefault()
  const condition = e.target.nodeName === 'IMG'
  // console.dir(e.target.dataset.source) - над этой строкой просидел 4 часа... слезы.
  // console.log(condition)
  // console.log(e)
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

modal.addEventListener('click', closeModalByClick)
function closeModalByClick(e) {
  // const condition = e.target.classList.contains('lightbox__overlay')
  if (e.target.classList.contains('lightbox__overlay')) {
    closeModalImg(modal)
  }
}
window.addEventListener('keydown', closeModalByKeydown)
function closeModalByKeydown(e) {
  // const condition = e.code === 'Escape'
  if (e.code === 'Escape') {
   closeModalImg(modal)
  }
}
modal.addEventListener('click', () => {
 closeModalImg(modal)
})

// зачистка слушателя
if (!modal.classList.contains('is-open')) {
  // window.removeEventListener('keydown', closeModalByKeydown)
  modal.removeEventListener('click', closeModalByClick)
}
