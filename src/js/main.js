const homeSection = document.querySelector("#home")
const aboutusSection = document.querySelector("#aboutus")
const offersSection = document.querySelector("#offers")
const contactSection = document.querySelector("#contact")
const homeLink = document.querySelector(".home-link")
const offersLink = document.querySelector(".offers-link")
const aboutusLink = document.querySelector(".aboutus-link")
const contactLink = document.querySelector(".contact-link")
const allLinks = document.querySelectorAll(".nav__item")
const allMobileLinks = document.querySelectorAll(".nav__item-mobile")
const desktopNav = document.querySelector(".nav__desktop")
const footerYear = document.querySelector(".year")
const hamburger = document.querySelector(".fa-bars")
const hamburgerMenu = document.querySelector(".hamburger-menu")
const crossMenu = document.querySelector(".cross-menu")
const cross = document.querySelector(".fa-xmark")
const hamburgerNav = document.querySelector(".nav__mobile")
const allSections = document.querySelectorAll(".section")
const mobileNav = document.querySelector(".nav__mobile-info")
const offersLinkPage = document.querySelector(".offers__link")

const scrollspy = () => {
	allLinks.forEach(link => {
		link.classList.remove("current-link")
		link.classList.remove("link-hover-dark")
	})
	if (
		window.scrollY + desktopNav.offsetHeight >= aboutusSection.offsetTop &&
		window.scrollY + desktopNav.offsetHeight <
			aboutusSection.offsetTop + aboutusSection.offsetHeight
	) {
		aboutusLink.classList.add("current-link")
		aboutusLink.classList.add("link-hover-dark")
	} else if (
		window.scrollY + desktopNav.offsetHeight >= homeSection.offsetTop &&
		window.scrollY + desktopNav.offsetHeight <
			homeSection.offsetTop + homeSection.offsetHeight
	) {
		homeLink.classList.add("current-link")
		homeLink.classList.add("link-hover-dark")
	} else if (
		window.scrollY + desktopNav.offsetHeight >= offersSection.offsetTop &&
		window.scrollY + desktopNav.offsetHeight <
			offersSection.offsetTop + offersSection.offsetHeight
	) {
		offersLink.classList.add("current-link")
		offersLink.classList.add("link-hover-dark")
	}
}

const handleMenuColor = () => {
	allSections.forEach(section => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= window.scrollY + 40
		) {
			hamburger.style.color = "black"
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= window.scrollY + 40
		) {
			hamburger.style.color = "white"
		}
	})
}

const handleMobileNav = () => {
	hamburgerMenu.classList.toggle("hamburger-display")
	crossMenu.classList.toggle("cross-display")
	mobileNav.classList.toggle("nav-display")
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

window.addEventListener("scroll", scrollspy)
window.addEventListener("scroll", handleMenuColor)
hamburgerNav.addEventListener("click", handleMobileNav)
allMobileLinks.forEach(link => {
	link.addEventListener("click", () => {
		mobileNav.classList.remove("nav-display")
		hamburgerMenu.classList.toggle("hamburger-display")
		crossMenu.classList.toggle("cross-display")
	})
})

handleCurrentYear()
