const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const navLinks = document.querySelectorAll('.nav-link')
const navbar = document.querySelector('.navbar')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }

  const sections = document.querySelectorAll('section')
  const scrollPos = window.scrollY + 100

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active')
        }
      })
    }
  })
})

const form = document.querySelector('.contact-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Thank you for your message! I will get back to you soon.')
  form.reset()
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
}, observerOptions)

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(30px)'
  el.style.transition = 'all 0.6s ease'
  observer.observe(el)
})
