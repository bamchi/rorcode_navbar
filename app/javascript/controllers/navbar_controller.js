import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ['mobileMenu']

  connect() {
    console.log('Navbar controller connected!')
  }

  // 'Solutions' flyout menu, show/hide based on flyout menu state.
  //
  // Entering: "transition ease-out duration-200"
  // From: "opacity-0 translate-y-1"
  // To: "opacity-100 translate-y-0"
  // Leaving: "transition ease-in duration-150"
  // From: "opacity-100 translate-y-0"
  // To: "opacity-0 translate-y-1"


  showMobileMenu() {
    console.log("[showMobileMenu]")
    console.log(this.mobileMenuTarget)
    this.mobileMenuTarget.style = 'visibility: visible;'
    this.mobileMenuTarget.classList.remove('opacity-0', 'translate-y-1', 'scale-95')
    this.mobileMenuTarget.classList.add('opacity-100', 'translate-y-0', 'scale-100')

    setTimeout(() => {
      this.mobileMenuTarget.classList.remove('opacity-100', 'translate-y-0', 'scale-100')
    }, 200)
  }

  hideMobileMenu() {
    console.log("[hideMobileMenu]")
    console.log(this.mobileMenuTarget)
    this.mobileMenuTarget.classList.remove('opacity-100', 'translate-y-0')
    this.mobileMenuTarget.classList.add('opacity-0', 'translate-y-1', 'scale-95')

    setTimeout(() => {
      this.mobileMenuTarget.style = 'visibility: hidden;'
    }, 200)
  }
}
