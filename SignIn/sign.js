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

// buttons switch
const background = document.querySelector('.color')
const signup = document.getElementById('sign-up'),
      signin = document.getElementById('sign-in'),
      title = document.getElementById('title'),
      text = document.getElementById('text'),
      form = document.getElementById('form')



  
    if(window.innerWidth > 700){
      signup.addEventListener('click',()=>{
        background.style.transform = 'translateX(-100%)'
        signin.style.display = 'block'
        signup.style.display = 'none'
        title.innerHTML = `Welcome Back!`
        text.innerHTML = `
            Please login to your account with your personal info`
        form.style.transform = 'translateX(100%)'
        form.innerHTML = `
        <div class="log form">
        <h1>Creat Account</h1>
        <div class="icons">
          <i class="fab fa-facebook" aria-hidden="true"></i>
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </div>
        <h5>or use your email for registration</h5>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>SIGN UP</button>
      
      </div>`
      })
      signin.addEventListener('click',()=>{
        background.style.transform = 'translateX(0)'
        signin.style.display = 'none'
        signup.style.display = 'block'
        title.innerHTML = `Hello, Frend!`
        text.innerHTML = `
            Enter your personaldetails to creat a account`
        form.style.transform = 'translateX(0)'
        form.innerHTML = `
        <h1>Sign in</h1>
        <div class="icons">
          <i class="fab fa-facebook" aria-hidden="true"></i>
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </div>
        <h5>or use your account</h5>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <h5>Forget your password ?</h5>
        <button>SIGN IN</button>`
      })
    }
    else{
      signup.addEventListener('click',()=>{
        background.style.transform = 'translateY(-100%)'
        signin.style.display = 'block'
        signup.style.display = 'none'
        title.innerHTML = `Welcome Back!`
        text.innerHTML = `
            Please login to your account with your personal info`
        form.style.transform = 'translateY(100%)'
        form.innerHTML = `
        <div class="log form">
        <h1>Creat Account</h1>
        <div class="icons">
          <i class="fab fa-facebook" aria-hidden="true"></i>
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </div>
        <h5>or use your email for registration</h5>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>SIGN UP</button>
      
      </div>`
      })
      signin.addEventListener('click',()=>{
        background.style.transform = 'translateY(0)'
        signin.style.display = 'none'
        signup.style.display = 'block'
        title.innerHTML = `Hello, Frend!`
        text.innerHTML = `
            Enter your personaldetails to creat a account`
        form.style.transform = 'translateY(0)'
        form.innerHTML = `
        <h1>Sign in</h1>
        <div class="icons">
          <i class="fab fa-facebook" aria-hidden="true"></i>
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </div>
        <h5>or use your account</h5>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <h5>Forget your password ?</h5>
        <button>SIGN IN</button>`
      }) 
    }


