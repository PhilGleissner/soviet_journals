var currentImageCounter = 0;
var rotisserie1 =  document.querySelectorAll('.rotisserie1')[0]
var covers1 = rotisserie1.querySelectorAll('.journal-cover1')
var rotisserie2 =  document.querySelectorAll('.rotisserie2')[0]
var covers2 = rotisserie2.querySelectorAll('.journal-cover2')
var rotisserie3 =  document.querySelectorAll('.rotisserie3')[0]
var covers3 = rotisserie3.querySelectorAll('.journal-cover3')
var rotisserie4 =  document.querySelectorAll('.rotisserie4')[0]
var covers4 = rotisserie4.querySelectorAll('.journal-cover4')
var rotisserie5 =  document.querySelectorAll('.rotisserie5')[0]
var covers5 = rotisserie5.querySelectorAll('.journal-cover5')
//var rotisserie6 =  document.querySelectorAll('.rotisserie6')[0]
//var covers6 = rotisserie6.querySelectorAll('.journal-cover6')

document.querySelector('.rotisserie1-next').addEventListener('click', function(event) {
  event.preventDefault()
  displayNextImage(covers1)
})

document.querySelector('.rotisserie1-back').addEventListener('click', function(event) {
  event.preventDefault()
  displayPreviousImage(covers1)
})

document.querySelector('.rotisserie2-next').addEventListener('click', function(event) {
  event.preventDefault()
  displayNextImage(covers2)
})

document.querySelector('.rotisserie2-back').addEventListener('click', function(event) {
  event.preventDefault()
  displayPreviousImage(covers2)
})

document.querySelector('.rotisserie3-next').addEventListener('click', function(event) {
  event.preventDefault()
  displayNextImage(covers3)
})

document.querySelector('.rotisserie3-back').addEventListener('click', function(event) {
  event.preventDefault()
  displayPreviousImage(covers3)
})

document.querySelector('.rotisserie4-next').addEventListener('click', function(event) {
  event.preventDefault()
  displayNextImage(covers4)
})

document.querySelector('.rotisserie4-back').addEventListener('click', function(event) {
  event.preventDefault()
  displayPreviousImage(covers4)
})

document.querySelector('.rotisserie5-next').addEventListener('click', function(event) {
  event.preventDefault()
  displayNextImage(covers5)
})

document.querySelector('.rotisserie5-back').addEventListener('click', function(event) {
  event.preventDefault()
  displayPreviousImage(covers5)
})

//document.querySelector('.rotisserie6-next').addEventListener('click', function(event) {
  //event.preventDefault()
  //displayNextImage(covers6)
//})

//document.querySelector('.rotisserie6-back').addEventListener('click', function(event) {
  //event.preventDefault()
  //displayPreviousImage(covers6)
//})

function displayNextImage(covers) {
  resetClasses(covers)
  incrementCurrentImageCounter(covers)
  covers[currentImageCounter].className += ' show'
}

function displayPreviousImage(covers) {
  resetClasses(covers)
  decremenCurrentImageCounter(covers)
  covers[currentImageCounter].className += ' show'
}

function resetClasses(covers) {
  for (var i = 0; i < covers.length; i++) {
    covers[i].className = 'journal-cover'
  }
}

function incrementCurrentImageCounter(covers) {
  if (currentImageCounter >= covers.length-1) {
    currentImageCounter = 0
  } else {
    currentImageCounter++
  }
}

function decremenCurrentImageCounter(covers) {
  if (currentImageCounter === 0) {
    currentImageCounter = covers.length-1
  } else {
    currentImageCounter--
  }
}
