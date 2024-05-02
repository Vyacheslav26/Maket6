function navigation() {
  const navigationMarker = document.querySelector('.navigation__marker')
  const navigationLinkActive = document.querySelector(
    '.navigation__link--active'
  )
  const navigationLinks = document.querySelectorAll('.navigation__link')

  document.addEventListener('DOMContentLoaded', () => {
    navigationMarker.style.top = navigationLinkActive.offsetTop + 'px'
    navigationMarker.style.height = navigationLinkActive.offsetHeight + 'px'
  })

  navigationLinks.forEach((navigationLink) => {
    navigationLink.addEventListener('mouseover', (event) => {
      navigationMarker.style.top = event.target.offsetTop + 'px'
      navigationMarker.style.height = event.target.offsetHeight + 'px'
    })

    navigationLink.addEventListener('mouseout', (event) => {
      navigationMarker.style.top = navigationLinkActive.offsetTop + 'px'
      navigationMarker.style.height = navigationLinkActive.offsetHeight + 'px'
    })
  })
}

export { navigation }
