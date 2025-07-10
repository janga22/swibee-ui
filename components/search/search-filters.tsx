"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"

export default function SearchFilters() {
  const [priceRange, setPriceRange] = useState([10000, 50000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const categories = [
    { id: "honey", label: "꿀 & 잼", count: 45 },
    { id: "cosmetics", label: "천연 화장품", count: 32 },
    { id: "organic", label: "유기농 식품", count: 28 },
    { id: "snacks", label: "수제 간식", count: 19 },
  ]

  const brands = ["Swibee Original", "Natural Honey Co.", "Organic Garden", "Pure Beauty"]

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  const resetFilters = () => {
    setPriceRange([10000, 50000])
    setSelectedCategories([])
    setSelectedBrands([])
    setSelectedRating(null)
  }

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">필터</h3>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={resetFilters} className="text-gray-500">
              초기화
            </Button>
            <Button variant="ghost" size="icon" className="w-6 h-6">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-medium text-gray-700 mb-3">가격대</h4>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={100000}
              min={0}
              step={1000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₩{priceRange[0].toLocaleString()}</span>
              <span>₩{priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Quick Price Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "1만원 이하", range: [0, 10000] },
            { label: "1-3만원", range: [10000, 30000] },
            { label: "3-5만원", range: [30000, 50000] },
            { label: "5만원 이상", range: [50000, 100000] },
          ].map((price, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => setPriceRange(price.range)}
              className={`rounded-full text-sm ${
                priceRange[0] === price.range[0] && priceRange[1] === price.range[1]
                  ? "bg-yellow-100 border-yellow-400 text-yellow-700"
                  : "bg-transparent"
              }`}
            >
              {price.label}
            </Button>
          ))}
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-medium text-gray-700 mb-3">카테고리</h4>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                  />
                  <label htmlFor={category.id} className="text-sm font-medium text-gray-700 cursor-pointer">
                    {category.label}
                  </label>
                </div>
                <span className="text-xs text-gray-500">({category.count})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h4 className="font-medium text-gray-700 mb-3">브랜드</h4>
          <div className="space-y-3">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                />
                <label htmlFor={brand} className="text-sm font-medium text-gray-700 cursor-pointer">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 className="font-medium text-gray-700 mb-3">평점</h4>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                className={`flex items-center space-x-2 w-full p-2 rounded-lg transition-colors ${
                  selectedRating === rating ? "bg-yellow-100" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">
                    {"★".repeat(rating)}
                    {"☆".repeat(5 - rating)}
                  </span>
                  <span className="text-sm text-gray-700">{rating}점 이상</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full py-3 font-semibold">
          필터 적용
        </Button>
      </div>
    </div>
  )
}
