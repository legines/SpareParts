import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["image"]
  static values = { images: Array }

  currentIndex = 0

  connect() {
    this.images = JSON.parse(this.element.dataset.imageCarouselImages)
    this.startCarousel()
  }

  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.imageTarget.src = this.images[this.currentIndex]
    }, 5000)
  }

  disconnect() {}
}

