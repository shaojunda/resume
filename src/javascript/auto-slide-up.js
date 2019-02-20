function launchAutoSlideUp() {
  let specialTags = document.querySelectorAll("[data-special-tag]")
  for (let index = 0; index < specialTags.length; index++) {
    const element = specialTags[index];
    element.classList.add("offset")
  }

  window.addEventListener('scroll', function () {
    customScroll()
  })

  setTimeout(function() {
    customScroll()
  }, 1100)

  // helper
  function customScroll() {
    let specialTags = document.querySelectorAll('[data-special-tag]')
    let minIndex = 0
    for (let index = 0; index < specialTags.length; index++) {
      if(Math.abs(specialTags[index].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = index
      }
    }
    specialTags[minIndex].classList.remove("offset")
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let index = 0; index < brothersAndMe.length; index++) {
      const element = brothersAndMe[index];
      element.classList.remove("highlight")
    }
    li.classList.add("highlight")
  }
}

export default launchAutoSlideUp

