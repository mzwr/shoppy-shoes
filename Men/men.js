// text change
const shoppy = document.querySelector('.shoppy')
const shoppyText = document.querySelector('.shoppy-text')

shoppy.addEventListener('mouseover', () => {
  shoppyText.innerHTML = 'Home'
})
shoppy.addEventListener('mouseout', () => {
  shoppyText.innerHTML = 'Shoppy'
})

// navbar
let openn = document.querySelector('.open')
let navbar = document.getElementById('nav')

  openn.addEventListener('click', function(){
    navbar.classList.toggle('show')
  })

// filters position
  const filtersContainer = document.querySelector('.container')

    document.addEventListener('scroll', () => {
      let y = scrollY
      let x = window.innerWidth

      if ( x > 500){
        if (  y < 300){
          filtersContainer.style.position = 'absolute'
          filtersContainer.style.top = '0'
          filtersContainer.style.left = '0'
        }else{
          filtersContainer.style.position = 'fixed'
          filtersContainer.style.top = '80px'
          filtersContainer.style.left = '0'
        }
      }
    })


// filters
let filtersProduct = [...products];

const container = document.querySelector('.products')

const displayProducts = () => {
  if (filtersContainer.length < 1){
    container.innerHTML = `<h1>Sorry, we don't sell that</h1>`
    return
  }

  container.innerHTML = filtersProduct.map((product) => {
    const { title, image, price} = product

    return `<article>
    <div class="image-box">
     <img src="${image}" alt="product image" class="image">
    </div>
    <h4>${title}</h4>
    <h4>${price}$</h4>
    </article> `
  })
  .join('')
};
displayProducts()

// range filter
  // range value display
  const range = document.querySelector('.range')
  const outPut = document.querySelector('.number')

range.addEventListener('input', () => {
    let x = range.value
    outPut.innerHTML = x

    filtersProduct = products.filter( (product) => {
      return product.price <= x
    })
  displayProducts()
})

// search filter

const inputSearch = document.querySelector('.search')

inputSearch.addEventListener('input', () => {
  const inputValue = inputSearch.value
  filtersProduct = products.filter( (product) => {
    return product.title.toLowerCase().includes(inputValue)
  })
  displayProducts()
})

// button search
// creeat buttons
const catigories = document.querySelector('.buttons')

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((prudect) => prudect.catigory))
  ]
 //  console.log(buttons)
 catigories.innerHTML = buttons.map((company) => {
   return `<button data-id="${company}">${company}</button>`
 })
 .join('')
}
displayButtons()

// display products depande les buttons

catigories.addEventListener('click', (e) => {
  const el = e.target
  if (el.dataset.id === 'all'){
    filtersProduct = [...products]
  }else{
    filtersProduct = products.filter((product) => {
      return product.catigory === el.dataset.id
    })
  }
  inputSearch.value = ''
  displayProducts()
})
