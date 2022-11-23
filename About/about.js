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

const text = document.querySelector('.lorem'),
      sales = document.querySelector('.sales'),
      sponsoring = document.querySelector('.sponsoring'),
      marketing = document.querySelector('.marketing')

sponsoring. addEventListener('click',()=>{
  sponsoring.classList.add('change')
  sales.classList.remove('change')
  marketing.classList.remove('change')
  text.innerHTML = `Quam tempora eaque saepe sint consequuntur 
 fugiat officiis tenetur nam incidunt adipisci!
 Lorem ipsum dolor sit amet consectetur adipisicing
 elit. Quam tempora eaque saepe sint consequuntur 
 fugiat officiis tenetur nam incidunt adipisci!`
})
marketing. addEventListener('click',()=>{
  sponsoring.classList.remove('change')
  sales.classList.remove('change')
  marketing.classList.add('change')
  text.innerHTML = `tempora eaque saepe sint consequuntur 
 fugiat officiis tenetur nam incidunt adipisci!
 Lorem ipsum dolor sit amet consectetur adipisicing
 elit. Quam tempora eaque saepe sint consequuntur 
 fugiat officiis tenetur nam incidunt adipisci!`
})
sales. addEventListener('click',()=>{
  sponsoring.classList.remove('change')
  sales.classList.add('change')
  marketing.classList.remove('change')
  text.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quam tempora eaque saepe sint consequuntur 
 fugiat officiis tenetur nam incidunt adipisci!`
})
