document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link')

  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      // Prevent default link behavior
      event.preventDefault()

      // Remove active class from all links
      navLinks.forEach((link) => {
        link.classList.remove('active')
      })

      // Add active class to the clicked link
      this.classList.add('active')

      // Find the index of the clicked link
      const index = Array.from(navLinks).indexOf(this)

      // Apply active class to the corresponding image
      const images = document.querySelectorAll('.image')
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add('active')
        } else {
          image.classList.remove('active')
        }
      })
    })
  })
})
