window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  // showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
  //linha alvo
  const targetLine = scrollY + innerHeight/2

  //verificar se a seção passou da linha
  //quais dados vou precisar?

  //topo da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verificar se a base esta abaixo da linha alvo
  //quais dados vou precisar?

  //a seção termina onde?
  const sectionEndAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  
  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }
}

// function showNavOnScroll(){
//   if (scrollY > 0) {
//     navigation.classList.add('scroll')
//     console.log('scroll')
//   }else{
//     navigation.classList.remove('scroll')
//   }
// }

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header, 
#services .card
#about,
#about header,
#about .content`);