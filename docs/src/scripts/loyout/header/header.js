function header() {
  const burgerLines = document.querySelectorAll('.burger__line')
  const headerBurger = document.querySelector('.header__burger')
  const navigationBurger = document.querySelector('.navigation__burger')
  const overlay = document.querySelector('.navigation__overlay')
  const navigation = document.querySelector('.navigation__container')

  const desktopWidth = 1440
  const width = document.body.clientWidth

  function openNavigation() {
    navigation.classList.add(`navigation__container--open`)
    overlay.classList.add('navigation__overlay--open')
    overlay.classList.remove('visibility-hidden')

    //В бургере 3 линии. 0-2 (цикл не нужен)
    burgerLines[0].classList.add('active')
    burgerLines[1].classList.add('active')
    burgerLines[2].classList.add('active')
  }

  function closeNavigation() {
    navigation.classList.remove(`navigation__container--open`)
    overlay.classList.remove('navigation__overlay--open')
    overlay.classList.add('visibility-hidden')

    burgerLines[0].classList.remove('active')
    burgerLines[1].classList.remove('active')
    burgerLines[2].classList.remove('active')
  }

  if (width > desktopWidth) {
    closeNavigation()
  }

  headerBurger.addEventListener('click', (event) => {
    openNavigation()
  })

  navigationBurger.addEventListener('click', (event) => {
    closeNavigation()
  })

  overlay.addEventListener('click', (event) => {
    closeNavigation()
  })
}

export { header }
