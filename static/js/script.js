var visualEssaysNavLink = document.querySelector('#visual-essays')
var subNav = document.querySelector('#sub-nav')
var subNavLinks = document.getElementsByClassName('subnav-link')

visualEssaysNavLink.addEventListener('click', function(event) {
  event.preventDefault()
  subNav.classList.toggle('active')
})

document.querySelector('body').addEventListener('click', function(event) {
  if (notTryingToNavigateToEssays() && subNavIsExpanded) {
    event.preventDefault()
    subNav.classList.remove('active')
  }
})

function subNavIsExpanded() {
  return subNav.classList.contains('active')
}

function notTryingToNavigateToEssays() {
  return event.target !== visualEssaysNavLink &&
         event.target !== subNav &&
         !isSubNavLink()
}

function isSubNavLink() {
  var i
  for (i = 0; i < subNavLinks.length; i++) {
    return subNavLinks[i].classList.contains('subnav-link')
  }
}
