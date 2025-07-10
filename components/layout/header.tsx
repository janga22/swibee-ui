"use client"

import { useState } from "react"
import { Search, ShoppingCart, Menu, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-yellow-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-yellow-400 text-yellow-900 text-center py-2 text-sm font-medium">
        🍯 달콤한 할인! 첫 주문 시 20% 할인 혜택 🐝
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🐝</span>
            </div>
            <h1 className="text-2xl font-bold text-yellow-600">Swibee</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">
              홈
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">
              카테고리
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">
              베스트
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">
              이벤트
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Input
                placeholder="달콤한 상품을 찾아보세요 🍯"
                className="pl-4 pr-10 py-2 rounded-full border-yellow-300 focus:border-yellow-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 w-4 h-4" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100">
              <Heart className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100 relative">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100">
              <User className="w-5 h-5 text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-yellow-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Input
              placeholder="달콤한 상품을 찾아보세요 🍯"
              className="pl-4 pr-10 py-2 rounded-full border-yellow-300 focus:border-yellow-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 w-4 h-4" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-yellow-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium py-2">
                홈
              </a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium py-2">
                카테고리
              </a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium py-2">
                베스트
              </a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium py-2">
                이벤트
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
