"use client"

import { useState } from "react"
import MobileHeader from "@/components/layout/mobile-header"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, TrendingUp } from "lucide-react"

const mainCategories = [
  {
    id: "honey",
    name: "꿀 & 잼",
    icon: "🍯",
    color: "bg-yellow-100",
    count: 45,
    subcategories: ["아카시아 꿀", "밤꿀", "야생화꿀", "수입꿀", "꿀잼", "과일잼"],
  },
  {
    id: "cosmetics",
    name: "천연 화장품",
    icon: "🧴",
    color: "bg-pink-100",
    count: 32,
    subcategories: ["스킨케어", "메이크업", "선케어", "바디케어", "헤어케어", "향수"],
  },
  {
    id: "organic",
    name: "유기농 식품",
    icon: "🌿",
    color: "bg-green-100",
    count: 28,
    subcategories: ["유기농 차", "유기농 곡물", "유기농 과일", "유기농 채소", "유기농 조미료"],
  },
  {
    id: "snacks",
    name: "수제 간식",
    icon: "🍪",
    color: "bg-orange-100",
    count: 19,
    subcategories: ["쿠키", "케이크", "마카롱", "초콜릿", "캔디", "견과류"],
  },
  {
    id: "supplements",
    name: "건강 보조제",
    icon: "💊",
    color: "bg-blue-100",
    count: 15,
    subcategories: ["비타민", "프로바이오틱스", "오메가3", "프로폴리스", "홍삼", "콜라겐"],
  },
  {
    id: "home",
    name: "홈 & 리빙",
    icon: "🏠",
    color: "bg-purple-100",
    count: 23,
    subcategories: ["캔들", "디퓨저", "수납용품", "인테리어", "주방용품", "청소용품"],
  },
  {
    id: "pet",
    name: "반려동물",
    icon: "🐕",
    color: "bg-amber-100",
    count: 12,
    subcategories: ["강아지 용품", "고양이 용품", "사료", "간식", "장난감", "케어용품"],
  },
  {
    id: "baby",
    name: "베이비 & 키즈",
    icon: "👶",
    color: "bg-rose-100",
    count: 18,
    subcategories: ["이유식", "기저귀", "장난감", "의류", "목욕용품", "안전용품"],
  },
]

const popularCategories = [
  { name: "프리미엄 꿀", count: 156, trend: "+12%" },
  { name: "천연 스킨케어", count: 89, trend: "+8%" },
  { name: "유기농 차", count: 67, trend: "+15%" },
  { name: "수제 쿠키", count: 45, trend: "+5%" },
]

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      <MobileHeader />

      <main className="pb-20">
        {/* Page Header */}
        <div className="bg-white px-4 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800 mb-1">카테고리</h1>
          <p className="text-sm text-gray-600">원하는 카테고리를 선택해보세요 🛍️</p>
        </div>

        {/* Popular Categories */}
        <div className="bg-white px-4 py-4 mb-2">
          <div className="flex items-center mb-3">
            <TrendingUp className="w-5 h-5 text-yellow-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">인기 카테고리</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {popularCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{category.name}</p>
                      <p className="text-xs text-gray-500">{category.count}개 상품</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-green-600 font-semibold">{category.trend}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Categories */}
        <div className="px-4 py-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">전체 카테고리</h2>
          <div className="space-y-3">
            {mainCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden shadow-sm">
                <CardContent className="p-0">
                  <button
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-800">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.count}개 상품</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        selectedCategory === category.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Subcategories */}
                  {selectedCategory === category.id && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        {category.subcategories.map((sub, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className="justify-start text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg"
                          >
                            {sub}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-4">
          <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-200">
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="font-semibold text-yellow-800 mb-2">🔥 오늘의 특가</h3>
                <p className="text-sm text-yellow-700 mb-3">선택된 카테고리 상품 최대 50% 할인!</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full px-6">
                  특가 상품 보기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <MobileBottomNav />
    </div>
  )
}
