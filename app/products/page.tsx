"use client"

import { useState } from "react"
import MobileHeader from "@/components/layout/mobile-header"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"
import MobileProductGrid from "@/components/products/mobile-product-grid"
import MobileProductFilters from "@/components/products/mobile-product-filters"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"

export default function MobileProductsPage() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      <MobileHeader />

      <main className="pb-20">
        {/* Page Header */}
        <div className="bg-white px-4 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800 mb-1">전체 상품</h1>
          <p className="text-sm text-gray-600">달콤한 Swibee의 모든 상품 🍯</p>
        </div>

        {/* Controls */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">총 1,234개 상품</span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-full px-4"
              >
                <SlidersHorizontal className="w-4 h-4 mr-1" />
                필터
              </Button>
              <select className="px-3 py-2 border border-gray-300 rounded-full text-sm bg-white">
                <option>인기순</option>
                <option>최신순</option>
                <option>가격 낮은순</option>
                <option>가격 높은순</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filters */}
        {showFilters && <MobileProductFilters />}

        {/* Product Grid */}
        <div className="px-4 py-4">
          <MobileProductGrid />
        </div>
      </main>

      <MobileBottomNav />
    </div>
  )
}
