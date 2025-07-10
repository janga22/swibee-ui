"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, TrendingUp, Hash } from "lucide-react"

interface SearchSuggestionsProps {
  onSearch: (query: string) => void
}

export default function SearchSuggestions({ onSearch }: SearchSuggestionsProps) {
  const recentSearches = ["프리미엄 아카시아 꿀", "천연 로즈힙 세럼", "유기농 허브티"]

  const popularSearches = [
    { keyword: "꿀", count: "1,234" },
    { keyword: "화장품", count: "987" },
    { keyword: "차", count: "756" },
    { keyword: "쿠키", count: "543" },
    { keyword: "비타민", count: "432" },
    { keyword: "오일", count: "321" },
  ]

  const categories = [
    { name: "꿀 & 잼", icon: "🍯", color: "bg-yellow-100" },
    { name: "천연 화장품", icon: "🧴", color: "bg-pink-100" },
    { name: "유기농 식품", icon: "🌿", color: "bg-green-100" },
    { name: "수제 간식", icon: "🍪", color: "bg-orange-100" },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gray-500" />
              최근 검색어
            </h3>
            <Button variant="ghost" size="sm" className="text-gray-500">
              전체 삭제
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => onSearch(search)}
                className="rounded-full bg-gray-50 border-gray-200 text-gray-700 hover:bg-yellow-50 hover:border-yellow-300"
              >
                {search}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Popular Searches */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-gray-500" />
          인기 검색어
        </h3>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-3">
              {popularSearches.map((item, index) => (
                <button
                  key={index}
                  onClick={() => onSearch(item.keyword)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-yellow-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-600 font-bold text-sm">#{index + 1}</span>
                    <span className="text-gray-800 font-medium">{item.keyword}</span>
                  </div>
                  <span className="text-xs text-gray-500">{item.count}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Quick Search */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Hash className="w-5 h-5 mr-2 text-gray-500" />
          카테고리별 검색
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => onSearch(category.name)}
              className={`${category.color} h-20 rounded-2xl border-2 border-transparent hover:border-yellow-300 transition-all duration-200 flex flex-col items-center justify-center space-y-1`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="font-medium text-gray-700 text-sm">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Search Tips */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">🔍 검색 팁</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• 브랜드명이나 상품명으로 검색해보세요</li>
            <li>• '천연', '유기농' 등 키워드를 활용해보세요</li>
            <li>• 음성 검색으로 더 편리하게 찾아보세요</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
