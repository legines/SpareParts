import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["image"]

  connect() {
    this.setupImageClickHandlers()
  }

  setupImageClickHandlers() {
    const images = document.querySelectorAll(".lightbox-trigger")
    images.forEach(img => {
      img.addEventListener("click", (e) => this.openLightbox(e))
    })
  }

  openLightbox(event) {
    event.preventDefault()
    event.stopPropagation()
    
    const imageUrl = event.target.src
    const modal = document.querySelector(".lightbox-modal")
    const modalImage = modal.querySelector(".lightbox-image")
    
    if (modalImage && imageUrl) {
      modalImage.src = imageUrl
      modal.classList.add("show")
    }
  }

  close(event) {
    // Only close if clicking on the modal background, not the image
    if (event.target.classList.contains("lightbox-modal")) {
      const modal = document.querySelector(".lightbox-modal")
      modal.classList.remove("show")
    }
  }
}
