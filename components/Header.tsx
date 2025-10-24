"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
              Logo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-colors hover:text-blue-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`font-medium transition-colors hover:text-blue-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors hover:text-blue-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 font-medium hover:text-blue-500 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 font-medium hover:text-blue-500 transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 font-medium hover:text-blue-500 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}