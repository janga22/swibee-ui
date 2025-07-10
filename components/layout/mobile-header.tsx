"use client"

import { useState } from "react"
import { Search, ShoppingCart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MobileHeader() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="max-w-sm mx-auto">
      {/* Top Notification Bar */}
      <div className="bg-yellow-400 text-yellow-900 text-center py-2 text-sm font-medium px-4">
        🍯 신규가입 20% 할인! 지금 가입하세요 🐝
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-yellow-200 shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-lg">🐝</span>
              </div>
              <h1 className="text-xl font-bold text-yellow-600">Swibee</h1>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(!showSearch)}
                className="rounded-full hover:bg-yellow-100 w-10 h-10"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100 w-10 h-10 relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                  2
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100 w-10 h-10 relative">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  3
                </span>
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="mt-3">
              <div className="relative">
                <Input
                  placeholder="달콤한 상품을 찾아보세요 🍯"
                  className="pl-4 pr-10 py-3 rounded-full border-yellow-300 focus:border-yellow-500 text-base"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 w-5 h-5" />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
